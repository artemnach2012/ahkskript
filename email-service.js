// email-service.js

// Конфигурация EmailJS
const EMAILJS_CONFIG = {
    publicKey: '1:496573762966:web:5df27d4c807dd9b9ee61b7',      
    serviceID: 'YOUR_SERVICE_ID',      
    templateIDs: {
        newOrder: 'YOUR_NEW_ORDER_TEMPLATE',      
        orderToClient: 'YOUR_CLIENT_TEMPLATE',    
        adminNotification: 'YOUR_ADMIN_TEMPLATE', 
        cancelClient: 'YOUR_CANCEL_TEMPLATE',      
        rejectOrder: 'YOUR_REJECT_TEMPLATE',       
        doneOrder: 'YOUR_DONE_TEMPLATE',          
        chatMessage: 'YOUR_CHAT_TEMPLATE',
        fileAttachment: 'template_hd2o5xa'
    }
};