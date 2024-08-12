import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const qaPairs = {
    "what should i do if i am arrested": "If you are arrested, it's crucial to remain calm and polite. You should ask for a lawyer immediately and avoid answering any questions or making any statements until your lawyer is present.",

    "how do i file for divorce": "To file for divorce, you need to meet the residency requirements of your state, file a petition for dissolution of marriage, and serve your spouse. It's advisable to consult with a lawyer to understand the process and your rights",

    "what is a power of attorney": "A power of attorney is a legal document that allows someone else to act on your behalf in legal or financial matters. There are different types, so it's important to choose one that fits your needs",

    "can i sue for emotional distress":"In some cases, you can sue for emotional distress if someone else's actions have caused you significant emotional trauma. However, proving emotional distress can be challenging and usually requires medical evidence.",

    "what are my rights if i am stopped by the police":"You have the right to remain silent, the right to refuse consent to a search, and the right to a lawyer if you are arrested. Always ask if you are free to leave and remain calm and respectful.",

    "how do i create a will":"Creating a will involves drafting a document that outlines how you want your assets distributed after your death. It's advisable to consult a lawyer to ensure the will is legally binding and addresses all your concerns",

    "what is a contract breach":"A contract breach occurs when one party fails to fulfill their obligations as specified in a contract. If you believe there has been a breach, you may be entitled to damages or specific performance",

    "how can i get a restraining order":"To get a restraining order, you need to file a petition with the court and prove that you are in danger or have been harassed. A lawyer can help guide you through the process and represent you in court",

    "what are my options if i cant pay my debts":"If you're unable to pay your debts, you may consider debt negotiation, bankruptcy, or other financial solutions. A lawyer can help you understand your options and the implications of each.",

    "what is a deposition":"A deposition is a sworn, out-of-court testimony given by a witness in a legal case. It can be used in court proceedings. You are under oath, so it's important to answer questions truthfully",

    "can i change my child custody agreement":"You can request a modification of your child custody agreement if there has been a significant change in circumstances. The court will consider the best interests of the child when making any changes",

    "how do i protect my intellectual property":"To protect your intellectual property, you may need to register trademarks, copyrights, or patents. A lawyer can help you navigate the registration process and enforce your rights",

    "what is a plea bargain":"A plea bargain is an agreement between a defendant and prosecutor in a criminal case, where the defendant agrees to plead guilty to a lesser charge in exchange for a lighter sentence or other benefits",

    "what should i do if im involved in a car accident":"If you're involved in a car accident, ensure everyone's safety, call the police, exchange information, and document the scene. It's also wise to consult a lawyer, especially if there are injuries or disputes.",

    "how do i start a business legally":"Starting a business involves choosing a legal structure, registering your business name, obtaining necessary licenses, and understanding your tax obligations. Consulting a lawyer can help you navigate these steps",

    "What is the statute of limitations":"The statute of limitations is the time limit within which you must file a lawsuit. This period varies depending on the type of case and the jurisdiction. It's important to act promptly to preserve your legal rights",

    "how do i expunge my criminal record":"Expungement is a legal process that can remove or seal criminal records. The eligibility for expungement varies by state and the nature of the offense. A lawyer can help you determine if you qualify and assist with the process.",

    "what should i do if i receive a subpoena":"If you receive a subpoena, you are legally required to provide the requested information or appear in court. It's important to consult a lawyer to understand your rights and obligations.",

    "can i represent myself in court":"You have the right to represent yourself in court, but it's often not advisable, especially in complex cases. A lawyer can provide valuable guidance and representation, increasing your chances of a favorable outcome",

    "what is mediation":"Mediation is a process where a neutral third party helps disputing parties reach a mutually acceptable agreement. It can be a less adversarial and more cost-effective way to resolve disputes than going to court.",

    "default": "I'm not sure how to answer that. Could you please rephrase?"
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);
      const response = qaPairs[input.toLowerCase()] || qaPairs['default'];
      setMessages((prevMessages) => [...prevMessages, { text: response, user: false }]);
      setInput('');
    }
  };

  return (
    <div className="chatbot mt-5">
      <div className="card-header " style={{backgroundColor:"#3282b8",color:"#fff"}}>
            <h5 className="card-title text-center">Chat with AI Assistant</h5>
          </div>
      <div className="chatbot-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user ? 'user-message' : 'bot-message'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your question..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
