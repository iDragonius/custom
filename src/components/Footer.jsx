import {React, useState} from "react";
import logo from "../assets/icons/logo.svg"
import ModalLang from "./Modals/ModalLang";

function Footer () {
    const [activeModal, setActiveModal] = useState(false)
    return ( 
        <footer>
        <div className="footer-logo">
            <img src={logo} alt="" width="150px" height="48px"/>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="130" height="40" viewBox="0 0 135 40">
            <g fill="none" fill-rule="nonzero">
                <rect width="135" height="40" fill="#171819" rx="4"/>
                <path d="M130 .8a4.2 4.2 0 0 1 4.2 4.2v30a4.2 4.2 0 0 1-4.2 4.2H5A4.2 4.2 0 0 1 .8 35V5A4.2 4.2 0 0 1 5 .8h125zm0-.8H5a5 5 0 0 0-5 5v30a5 5 0 0 0 5 5h125a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5z"/>
                <path fill="#FFF" d="M68.14 21.75A4.25 4.25 0 1 0 72.41 26a4.19 4.19 0 0 0-4.27-4.25zm0 6.83a2.58 2.58 0 1 1 2.4-2.58 2.46 2.46 0 0 1-2.4 2.58zm-9.31-6.83A4.25 4.25 0 1 0 63.09 26a4.19 4.19 0 0 0-4.27-4.25h.01zm0 6.83A2.58 2.58 0 1 1 61.22 26a2.46 2.46 0 0 1-2.4 2.58h.01zm-11.09-5.52v1.8h4.32a3.77 3.77 0 0 1-1 2.27 4.42 4.42 0 0 1-3.33 1.32 4.8 4.8 0 1 1 0-9.6A4.6 4.6 0 0 1 51 20.14l1.27-1.27A6.29 6.29 0 0 0 47.74 17a6.61 6.61 0 1 0 0 13.21 6 6 0 0 0 4.61-1.85 6 6 0 0 0 1.56-4.22 5.87 5.87 0 0 0-.1-1.13l-6.07.05zm45.31 1.4a4 4 0 0 0-3.64-2.71 4 4 0 0 0-4 4.25 4.16 4.16 0 0 0 4.22 4.25 4.23 4.23 0 0 0 3.54-1.88l-1.45-1a2.43 2.43 0 0 1-2.09 1.18 2.16 2.16 0 0 1-2.06-1.29l5.69-2.35-.21-.45zm-5.8 1.42a2.33 2.33 0 0 1 2.22-2.48 1.65 1.65 0 0 1 1.58.9l-3.8 1.58zM82.63 30h1.87V17.5h-1.87V30zm-3.06-7.3h-.07a3 3 0 0 0-2.24-1 4.26 4.26 0 0 0 0 8.51 2.9 2.9 0 0 0 2.24-1h.06v.61c0 1.63-.87 2.5-2.27 2.5a2.35 2.35 0 0 1-2.14-1.51l-1.63.68A4.05 4.05 0 0 0 77.29 34c2.19 0 4-1.29 4-4.43V22h-1.72v.7zm-2.14 5.88a2.59 2.59 0 0 1 0-5.16A2.4 2.4 0 0 1 79.7 26a2.38 2.38 0 0 1-2.28 2.58h.01zm24.38-11.08h-4.47V30h1.87v-4.74h2.61a3.89 3.89 0 1 0 0-7.76h-.01zm0 6H99.2v-4.26h2.65a2.145 2.145 0 1 1 0 4.29l-.04-.03zm11.53-1.8a3.5 3.5 0 0 0-3.33 1.91l1.66.69a1.77 1.77 0 0 1 1.7-.92 1.8 1.8 0 0 1 2 1.61v.13a4.13 4.13 0 0 0-1.95-.48c-1.79 0-3.6 1-3.6 2.81a2.89 2.89 0 0 0 3.1 2.75 2.63 2.63 0 0 0 2.4-1.2h.06v1h1.8v-4.81c0-2.19-1.66-3.46-3.79-3.46l-.05-.03zm-.23 6.85c-.61 0-1.46-.31-1.46-1.06 0-1 1.06-1.33 2-1.33a3.32 3.32 0 0 1 1.7.42 2.26 2.26 0 0 1-2.19 2l-.05-.03zM123.74 22l-2.14 5.42h-.06L119.32 22h-2l3.33 7.58-1.9 4.21h1.95L125.82 22h-2.08zm-16.81 8h1.87V17.5h-1.87V30z"/>
                <path fill="#FFF" stroke="#FFF" stroke-width=".2" d="M47.42 10.24a2.71 2.71 0 0 1-.75 2 2.91 2.91 0 0 1-2.2.89 3.15 3.15 0 0 1-2.21-5.37 3 3 0 0 1 2.21-.9 3.1 3.1 0 0 1 1.23.25c.362.146.684.376.94.67l-.53.53a2 2 0 0 0-1.64-.71 2.32 2.32 0 0 0-2.33 2.4 2.36 2.36 0 0 0 4 1.73 1.89 1.89 0 0 0 .5-1.22h-2.17v-.72h2.91c.027.149.04.3.04.45zM52 7.74h-2.7v1.9h2.46v.72H49.3v1.9H52V13h-3.5V7H52v.74zM55.28 13h-.77V7.74h-1.68V7H57v.74h-1.72V13zm4.66 0V7h.77v6h-.77zm4.19 0h-.77V7.74h-1.68V7h4.12v.74h-1.67V13zm9.48-.78a3.12 3.12 0 0 1-4.4 0 3.24 3.24 0 0 1 0-4.45 3.1 3.1 0 0 1 4.4 0 3.23 3.23 0 0 1 0 4.45zm-3.83-.5a2.31 2.31 0 0 0 3.26 0 2.56 2.56 0 0 0 0-3.44 2.31 2.31 0 0 0-3.26 0 2.56 2.56 0 0 0 0 3.44zm5.8 1.28V7h.94l2.92 4.67V7h.77v6h-.8l-3.05-4.89V13h-.78z"/>
                <path fill="#FFF" d="M10.44 7.54a2 2 0 0 0-.46 1.4v22.12a2 2 0 0 0 .46 1.4l.07.07L22.9 20.15v-.29L10.51 7.47l-.07.07zM27 24.28l-4.1-4.13v-.29l4.1-4.14.09.05L32 18.56c1.4.79 1.4 2.09 0 2.89l-4.89 2.78-.11.05z"/>
                <path fill="#FFF" d="M27.12 24.22L22.9 20 10.44 32.46a1.63 1.63 0 0 0 2.08.06l14.61-8.3M27.12 15.78l-14.61-8.3a1.63 1.63 0 0 0-2.08.06L22.9 20l4.22-4.22z"/>
                <path fill="#000" d="M27 24.13l-14.49 8.25a1.67 1.67 0 0 1-2 0l-.07.07.07.07a1.66 1.66 0 0 0 2 0l14.61-8.3-.12-.09z" opacity=".2"/>
                <path fill="#000" d="M10.44 32.32a2 2 0 0 1-.46-1.4v.15a2 2 0 0 0 .46 1.4l.07-.07-.07-.08zM32 21.3l-5 2.83.09.09L32 21.44A1.75 1.75 0 0 0 33 20a1.86 1.86 0 0 1-1 1.3z" opacity=".12"/>
                <path fill="#FFF" d="M12.51 7.62L32 18.7a1.86 1.86 0 0 1 1 1.3 1.75 1.75 0 0 0-1-1.44L12.51 7.48c-1.4-.79-2.54-.13-2.54 1.47v.15c.03-1.61 1.15-2.27 2.54-1.48z" opacity=".25"/>
            </g>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="40" viewBox="0 0 135 40">
            <g fill="none" fill-rule="nonzero">
                <rect width="135" height="40" fill="#171819" rx="4"/>
                <path fill="#FFF" d="M47.43 26.265h-4.734l-1.137 3.356h-2.005l4.484-12.418h2.083l4.483 12.418h-2.039l-1.136-3.356zm-4.244-1.55h3.752l-1.85-5.446h-.051l-1.85 5.447zm17.1.38c0 2.813-1.505 4.62-3.778 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484h-1.859V20.567h1.8v1.506h.033a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.947-3.038-2.392-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.393-1.197 2.393-3.046zm11.876 0c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484h-1.859V20.567h1.799v1.506h.034a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046zm8.495 1.066c.138 1.232 1.334 2.04 2.97 2.04 1.566 0 2.693-.808 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.137-1.987-2.634-1.987-1.497 0-2.521.757-2.521 1.858 0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.794 3.778-2.753 0-4.613-1.42-4.733-3.667h1.902zm11.636-7.736v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137.204-.004.408-.018.611-.043v1.463c-.34.063-.686.092-1.032.086-1.833 0-2.548-.689-2.548-2.445V22.04H85.29v-1.472h1.316v-2.142h1.867zm2.719 6.67c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638zm6.695 0c0-1.954-.895-3.108-2.401-3.108-1.506 0-2.4 1.162-2.4 3.108 0 1.962.894 3.106 2.4 3.106 1.506 0 2.401-1.144 2.401-3.106zm3.426-4.528h1.773v1.541h.043a2.16 2.16 0 0 1 2.177-1.635c.214-.001.428.022.637.069v1.738a2.598 2.598 0 0 0-.835-.112 1.873 1.873 0 0 0-1.937 2.083v5.37h-1.858v-9.054zm13.198 6.395c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.19-4.682 2.506 0 4.08 1.72 4.08 4.466v.637h-6.394v.112a2.358 2.358 0 0 0 2.436 2.564 2.048 2.048 0 0 0 2.09-1.273h1.765zm-6.282-2.702h4.526a2.177 2.177 0 0 0-2.22-2.298 2.292 2.292 0 0 0-2.306 2.298zM42.953 7.856a2.64 2.64 0 0 1 2.808 2.965c0 1.906-1.03 3.002-2.808 3.002h-2.155V7.856h2.155zm-1.228 5.123h1.125a1.876 1.876 0 0 0 1.967-2.146 1.881 1.881 0 0 0-1.967-2.134h-1.125v4.28zm5.083-1.41a2.133 2.133 0 1 1 4.247 0 2.134 2.134 0 1 1-4.247 0zm3.333 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.571-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zm6.56 2.254h-.923l-.93-3.317h-.07l-.927 3.317h-.913L51.696 9.32h.902l.806 3.436h.067l.926-3.436h.852l.926 3.436h.07l.803-3.436h.889L56.7 13.823zm2.28-4.503h.855v.715h.066c.231-.527.771-.849 1.344-.802a1.465 1.465 0 0 1 1.559 1.675v2.915h-.889V11.13c0-.724-.314-1.084-.972-1.084a1.033 1.033 0 0 0-1.075 1.141v2.635h-.888V9.32zm5.24-1.758h.888v6.26h-.888v-6.26zm2.124 4.007a2.133 2.133 0 1 1 4.247 0 2.134 2.134 0 1 1-4.247 0zm3.333 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.571-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zm1.85.98c0-.81.603-1.278 1.675-1.344l1.22-.07v-.389c0-.475-.315-.744-.922-.744-.497 0-.84.182-.939.5h-.86c.09-.773.818-1.27 1.84-1.27 1.128 0 1.765.563 1.765 1.514v3.077h-.855v-.633h-.07c-.291.462-.808.732-1.353.707a1.36 1.36 0 0 1-1.501-1.348zm2.894-.384v-.377l-1.1.07c-.62.042-.9.253-.9.65 0 .405.351.64.834.64a1.061 1.061 0 0 0 1.166-.983zm2.053-.596c0-1.423.732-2.324 1.87-2.324a1.484 1.484 0 0 1 1.38.79h.067V7.562h.888v6.26h-.851v-.71h-.07a1.563 1.563 0 0 1-1.415.785c-1.145 0-1.869-.901-1.869-2.328zm.918 0c0 .955.45 1.53 1.203 1.53.75 0 1.212-.583 1.212-1.526 0-.938-.468-1.53-1.212-1.53-.748 0-1.203.58-1.203 1.526zm6.964 0a2.133 2.133 0 1 1 4.247 0 2.134 2.134 0 1 1-4.247 0zm3.333 0c0-.976-.438-1.547-1.208-1.547-.772 0-1.207.571-1.207 1.547 0 .984.435 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zm2.106-2.25h.856v.716h.066c.231-.527.77-.849 1.344-.802a1.465 1.465 0 0 1 1.559 1.675v2.915h-.889V11.13c0-.724-.314-1.084-.972-1.084a1.033 1.033 0 0 0-1.075 1.141v2.635h-.889V9.32zm8.846-1.12V9.34h.976v.749h-.976v2.315c0 .472.194.679.637.679.113 0 .226-.008.339-.021v.74c-.16.029-.322.044-.484.046-.988 0-1.382-.348-1.382-1.216v-2.543h-.714V9.34h.715V8.2h.89zm2.19-.637h.88v2.481h.07a1.386 1.386 0 0 1 1.374-.806 1.483 1.483 0 0 1 1.55 1.679v2.907h-.889v-2.688c0-.72-.335-1.084-.963-1.084a1.052 1.052 0 0 0-1.134 1.142v2.63h-.888V7.562zm9.056 5.045a1.828 1.828 0 0 1-1.95 1.303 2.045 2.045 0 0 1-2.081-2.325 2.077 2.077 0 0 1 2.076-2.352c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 0 0 1.2 1.29 1.08 1.08 0 0 0 1.07-.546h.856zm-3.126-1.451h2.275a1.086 1.086 0 0 0-1.109-1.167 1.152 1.152 0 0 0-1.166 1.167zM29.896 19.426a4.949 4.949 0 0 1 2.356-4.152 5.066 5.066 0 0 0-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 0 0-4.473 2.727c-1.934 3.349-.491 8.27 1.361 10.977.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.67a10.962 10.962 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4zm-2.732-8.09a4.872 4.872 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.659 4.636 4.636 0 0 0-1.144 3.361 4.099 4.099 0 0 0 3.237-1.53z"/>
            </g>
        </svg>
            </div>
        </div>
        <div className="footer-middle footer-main">
            <div className="footer-info">
                <p>Cлужбы доставки еды, которые с любовью обещают доставить здоровые и вкусные блюда прямо из ресторана в ваш дом.</p>
                <p>
                    <span>Отправьте нам письмо по адресу</span>
                    <p href="">support@fooderos.com</p>
                </p>
            </div>
            <div className="footer-list">
                <p>Kомпания</p>
                <span href="">O нас</span>
                <span href="">Свяжитесь с нами</span>
                <span href="">Условия</span>
                <span href="">Конфиденциальность</span>
            </div>
            <div className="footer-list">
                <p>Партнерство</p>
                <span href="">Бизнес</span>
                <span href="">Курьерам</span>
            </div>
            <div className="footer-contact">
                <p>Отправить ссылку для скачивания приложения на мобильный</p>
                <div>
                    <div>+994</div>
                    <input type="tel"placeholder="77 510 5005"/>
                </div>
                <button>Отправить</button>
            </div>
            <div className="footer-languages" onMouseEnter={() => setActiveModal(true)}  onMouseLeave={() => setActiveModal(false)}>
                <div className="foot-lang"  >
                    <svg _ngcontent-fooderos-client-c130="" width="20px" height="20px" viewBox="0 0 24 24" className="language_icon"><path _ngcontent-fooderos-client-c130="" d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path></svg>
                    <span>ru</span>
                    <svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em" data-icon="down" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
                </div>
                <ModalLang active={activeModal}>
                    <p>az</p>
                    <p>en</p>
                    <p>ru</p>
                </ModalLang>
            </div>
        </div>
        <div className="footer-middle responsive-footer">
        <div className="footer-info">
            <p>Cлужбы доставки еды, которые с любовью обещают доставить здоровые и вкусные блюда прямо из ресторана в ваш дом.</p>
            <p>
                <span>Отправьте нам письмо по адресу</span>
                <a href="">support@fooderos.com</a>
            </p>
        </div>
        <div>
            <div className="footer-list">
                <h6>Kомпания</h6>
                <span href="">O нас</span>
                <span href="">Свяжитесь с нами</span>
                <span href="">Условия</span>
                <span href="">Конфиденциальность</span>
            </div>
            <div className="footer-list">
                <h6>Партнерство</h6>
                <span href="">Бизнес</span>
                <span href="">Курьерам</span>
            </div>
        </div>
        <div>
            <div className="footer-contact">
                <p>Отправить ссылку для скачивания приложения на мобильный</p>
                <div>
                    <div>+994</div>
                    <input type="tel"placeholder="77 510 5005"/>
                </div>
                <button>Отправить</button>
            </div>
            <div className="footer-languages" onMouseEnter={() => setActiveModal(true)}  onMouseLeave={() => setActiveModal(false)}>
                <div className="foot-lang"  >
                    <svg _ngcontent-fooderos-client-c130="" width="20px" height="20px" viewBox="0 0 24 24" className="language_icon"><path _ngcontent-fooderos-client-c130="" d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path></svg>
                    <span>ru</span>
                    <svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em" data-icon="down" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
                </div>
                <ModalLang active={activeModal}>
                    <p>az</p>
                    <p>en</p>
                    <p>ru</p>
                </ModalLang>
            </div>
        </div>

    </div>
        <div className="sc">
            <span>Fooderos ООО (ИНН: 2005766291) 2019-2022</span>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <g fill="none" fill-rule="evenodd">
                <circle cx="16" cy="16" r="15.5" fill="#FAFAFA" stroke="#E3E4E6"/>
                <path fill="#171819" fill-rule="nonzero" d="M19.56 8.003L17.68 8c-2.115 0-3.48 1.532-3.48 3.902v1.8h-1.893c-.163 0-.295.144-.295.323v2.606c0 .179.132.324.295.324H14.2v6.577c0 .179.133.323.296.323h2.468c.164 0 .296-.144.296-.323v-6.577h2.212c.164 0 .296-.145.296-.324v-2.606a.34.34 0 0 0-.086-.229.284.284 0 0 0-.21-.095H17.26v-1.525c0-.733.16-1.105 1.034-1.105h1.267c.164 0 .296-.145.296-.324v-2.42c0-.179-.132-.323-.295-.324z"/>
            </g>
             </svg>
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 22 22" fill="none">
                <path d="M6.39561 5C5.55174 5 5 5.55413 5 6.28245C5 6.99469 5.5353 7.56462 6.36323 7.56462H6.37924C7.23962 7.56462 7.77506 6.99469 7.77506 6.28245C7.75898 5.55413 7.23962 5 6.39561 5V5Z" fill="black"/>
                <path d="M5.14575 8.57788H7.61274V15.9999H5.14575V8.57788Z" fill="black"/>
                <path d="M13.6681 8.40381C12.3372 8.40381 11.4448 9.65437 11.4448 9.65437V8.57801H8.97778V16H11.4447V11.8553C11.4447 11.6334 11.4608 11.4119 11.526 11.2532C11.7043 10.8101 12.1102 10.3511 12.7917 10.3511C13.6844 10.3511 14.0414 11.0317 14.0414 12.0295V16H16.5082V11.7444C16.5082 9.46465 15.2911 8.40381 13.6681 8.40381V8.40381Z" fill="black"/>
                <circle cx="11" cy="11" r="10.5" stroke="#E8ECF0"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <g fill="none" fill-rule="evenodd">
                    <circle cx="16" cy="16" r="15.5" fill="#FAFAFA" stroke="#E3E4E6"/>
                    <g fill="#171819" fill-rule="nonzero">
                        <path d="M19.52 8h-7.129A4.396 4.396 0 0 0 8 12.391v7.13a4.396 4.396 0 0 0 4.391 4.39h7.13a4.396 4.396 0 0 0 4.39-4.39v-7.13A4.396 4.396 0 0 0 19.522 8zm2.98 11.52a2.983 2.983 0 0 1-2.98 2.98h-7.129a2.983 2.983 0 0 1-2.98-2.98v-7.129a2.983 2.983 0 0 1 2.98-2.98h7.13a2.983 2.983 0 0 1 2.979 2.98v7.13z"/>
                        <path d="M15.956 11.856c-2.26 0-4.1 1.84-4.1 4.1s1.84 4.1 4.1 4.1 4.1-1.84 4.1-4.1-1.84-4.1-4.1-4.1zm0 6.788a2.691 2.691 0 0 1-2.688-2.688 2.691 2.691 0 0 1 2.688-2.688 2.691 2.691 0 0 1 2.688 2.688 2.691 2.691 0 0 1-2.688 2.688zM20.228 10.659a1.04 1.04 0 0 0-1.035 1.035c0 .272.11.54.304.732.192.192.459.304.73.304.274 0 .54-.112.733-.304a1.04 1.04 0 0 0 0-1.464 1.04 1.04 0 0 0-.732-.303z"/>
                    </g>
                </g>
            </svg>
            </div>
        </div>
    </footer>
     );
}

export default Footer ;