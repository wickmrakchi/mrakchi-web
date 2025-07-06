import React, { useState } from 'react';
import { ChevronRight, X, CheckCircle, XCircle, Loader } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  features: string[];
}

interface ServiceRequestForm {
  fullName: string;
  userName: string;
  IdAccountDiscord: string;
  serviceType: string;
  notes: string;
  paymentMethod: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, icon, features }) => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [formData, setFormData] = useState<ServiceRequestForm>({
    fullName: '',
    userName: '',
    IdAccountDiscord: '',
    serviceType: title,
    notes: '',
    paymentMethod: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setStatusMessage('');
    }
  };

  const sendToDiscord = async (data: ServiceRequestForm) => {
    const webhookUrl = 'YOUR_DISCORD_WEBHOOK_URL_HERE'; // Replace with your Discord webhook URL

    const message = {
      content: `🛠️ **New Service Request By <@${data.IdAccountDiscord}>:**
- **Name:** ${data.fullName}
- **User Name Discord:** ${data.userName}
- **Id Account Discord:** ${data.IdAccountDiscord}
- **Type of Service:** ${data.serviceType}
- **Notes:** ${data.notes}
- **Payment Method:** ${data.paymentMethod}`
    }

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return { success: true, message: 'Service request sent successfully!' };
    } catch (error) {
      console.error('Error sending to Discord:', error);
      return { 
        success: false, 
        message: error instanceof Error ? error.message : 'Failed to send service request'
      };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      const result = await sendToDiscord(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage('✅ Service request submitted successfully! I will contact you soon.');
        setFormData({
          fullName: '',
          userName: '',
          IdAccountDiscord: '',
          serviceType: title,
          notes: '',
          paymentMethod: ''
        });
        setTimeout(() => {
          setShowModal(false);
          setSubmitStatus('idle');
          setStatusMessage('');
        }, 3000);
      } else {
        setSubmitStatus('error');
        setStatusMessage(`❌ Failed to submit request: ${result.message}. Please try again or contact me directly.`);
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('❌ An unexpected error occurred. Please try again later or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSubmitStatus('idle');
    setStatusMessage('');
    setFormData({
      fullName: '',
      userName: '',
      IdAccountDiscord: '',
      serviceType: title,
      notes: '',
      paymentMethod: ''
    });
  };

  const paymentOptions = [
    { value: '', label: 'Select Payment Method' },
    { value: 'paypal', label: 'PayPal' },
    { value: 'bank-transfer', label: 'Bank Transfer' },
    { value: 'credits', label: 'Credits' }
  ];

  const getStatusIcon = () => {
    switch (submitStatus) {
      case 'success':
        return <CheckCircle size={20} className="text-green-500" />;
      case 'error':
        return <XCircle size={20} className="text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (submitStatus) {
      case 'success':
        return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      case 'error':
        return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      default:
        return '';
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform hover:translate-y-[-8px] overflow-hidden group">
        <div className="p-6">
          <div className="w-14 h-14 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 dark:group-hover:bg-red-700 transition-colors">
            <div className="text-red-600 dark:text-red-300 group-hover:text-white transition-colors">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
          <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-6">
            {price}
          </div>
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight size={18} className="text-red-600 dark:text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <button 
            onClick={() => setShowModal(true)}
            className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 text-gray-900 dark:text-white rounded-lg transition-colors font-medium"
          >
            Request Service
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Request Service: {title}
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  disabled={isSubmitting}
                >
                  <X size={24} />
                </button>
              </div>
              {submitStatus !== 'idle' && statusMessage && (
                <div className={`mb-6 p-4 rounded-lg border flex items-start gap-3 ${getStatusColor()}`}>
                  {getStatusIcon()}
                  <div className="flex-1">
                    <p className="font-medium">
                      {submitStatus === 'success' ? 'Request Sent!' : 'Request Failed'}
                    </p>
                    <p className="text-sm mt-1">{statusMessage}</p>
                    {submitStatus === 'success' && (
                      <p className="text-xs mt-2 opacity-75">This window will close automatically...</p>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white disabled:opacity-50"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="userName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white disabled:opacity-50"
                    placeholder="Enter your Account Discord"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="IdAccountDiscord" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Id Account Discord
                  </label>
                  <input
                    type="number"
                    id="IdAccountDiscord"
                    name="IdAccountDiscord"
                    value={formData.IdAccountDiscord}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white disabled:opacity-50"
                    placeholder="Enter your Id Account Discord"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Type of Service
                  </label>
                  <input
                    type="text"
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white disabled:opacity-50"
                    placeholder="Service type"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Payment Method
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white disabled:opacity-50"
                  >
                    {paymentOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-colors text-gray-900 dark:text-white resize-none disabled:opacity-50"
                    placeholder="Any additional requirements or notes..."
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    disabled={isSubmitting}
                    className="flex-1 py-3 px-4 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'success'}
                    className="flex-1 py-3 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader size={16} className="animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle size={16} className="mr-2" />
                        Sent!
                      </>
                    ) : (
                      'Submit Request'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;
