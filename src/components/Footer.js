import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          <strong>Вуйко Наталия Викторовна</strong> <br />
          учитель русского языка и литературы <br />
          "Общеобразовательной школы имени Амангелды Иманова" <br />
          Туркестанской области Ордабасынского района <br />
          <a href="mailto:natali-vuiko@yandex.ru" className="footer-link">
            Email: natali-vuiko@yandex.ru
          </a>
        </p>
        <hr />
        <p className="footer-small">
          Автор сайта: <strong>Вуйко Ярослава</strong> <br />
          <a
            href="https://www.behance.net/2313209b"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Behance
          </a>
          {" | "}
          <a
            href="mailto:yaroslava.vuiko@gmail.com"
            className="footer-link"
          >
            Email: yaroslava.vuiko@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
