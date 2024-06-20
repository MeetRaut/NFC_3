import React, { useState } from "react";
import Modal from "../Modal";
import { infoConfig } from "../../config/info";
import Image from "next/image";

const domainInfo = {
  ai: {
    title: "AI / ML",
    content: "Artificial Intelligence (AI) and Machine Learning (ML) are technologies that enable computers to learn from and make decisions based on data. They are used in a wide range of applications, from autonomous vehicles to predictive analytics."
  },
  blockchain: {
    title: "Blockchain",
    content: "Blockchain is a decentralized digital ledger that records transactions across many computers in a way that ensures security and transparency. It's the technology behind cryptocurrencies like Bitcoin and Ethereum."
  },
  social: {
    title: "Social Cause",
    content: "Projects in the social cause domain aim to address societal issues and make a positive impact on the community. This includes initiatives related to health, education, environment, and more."
  },
  webdev: {
    title: "Web/App Development",
    content: "Web and app development involves creating websites and mobile applications. This domain covers a wide range of technologies and practices, from front-end design to back-end programming."
  }
};

const Domains = () => {
  const { about } = infoConfig;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleOpenModal = (domain) => {
    setModalContent(domainInfo[domain]);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalContent({});
  };

  return (
    <section
      id="domains"
      className="section about-section wow animate__animated animate__fadeInUp"
      data-wow-duration="1s"
    >
      <div className="abbox">
        <h2 className="section-title">DOMAINS</h2>
        <div className="paraDiv">
          <div className="domains">
            <div className="domain">
              <div
                className="domain-div"
                id="ai"
                onClick={() => handleOpenModal("ai")}
              >
                <img src="./images/domains/ai.png" width={150} height={150} />
                <p>AI / ML</p>
              </div>
              <div
                className="domain-div"
                onClick={() => handleOpenModal("blockchain")}
              >
                <img
                  src="./images/domains/blockchain.png"
                  width={150}
                  height={150}
                />
                <p>Blockchain</p>
              </div>
            </div>
            <div className="domain">
              <div
                className="domain-div"
                onClick={() => handleOpenModal("social")}
              >
                <img
                  src="./images/domains/social.png"
                  width={150}
                  height={150}
                />
                <p>Social Cause</p>
              </div>
              <div
                className="domain-div"
                onClick={() => handleOpenModal("webdev")}
              >
                <img
                  src="./images/domains/webdev.png"
                  width={150}
                  height={150}
                />
                <p>Web/App Development</p>
              </div>
            </div>
          </div>
          <div className="rstar">
            <img
              className="topstar"
              src="./images/images/pirate01.png"
              alt="Hack the space Hackathon Star"
            />
          </div>
          <div className="frm about-frm">
            <img
              className="pirateship1"
              src="./images/images/pirateship1.png"
              alt="Hack the space Hackathon Planet"
            />
          </div>
        </div>
      </div>
      {/* <div className="aconst1">
        <Image
          src="/images/images/star.png"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>

      <div className="aconst3">
        <Image
          src="/images/images/darth.png"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div> */}

      <div className="pattern7">
        <img
          src="./images\Constillations\Moon.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>
      <Modal show={modalOpen} onClose={handleCloseModal}>
        <h2>{modalContent.title}</h2>
        <p>{modalContent.content}</p>
      </Modal>
    </section>
  );
};

export default Domains;