class Newcard extends HTMLElement{
    constructor(){
        super();
        
        const shadow = this.attachShadow({ mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build(){
       const componentRoot = document.createElement('div');
       componentRoot.setAttribute('class', 'card');
       
        const cardSegundo = document.createElement('div');
        cardSegundo.setAttribute('class', 'card_segundo');

        const cardSegundoImg = document.createElement('img');
        cardSegundoImg.setAttribute('class', 'card_segundo-img');
        cardSegundoImg.src= this.getAttribute('img') || './assets/image/no-image.png'; 

        const cardSegundoName = document.createElement('p');
        cardSegundoName.setAttribute('class', 'card_segundo-nome');
        cardSegundoName.textContent = this.getAttribute('name') || 'anonymous';


        const cardTeceiro = document.createElement('div');
        cardTeceiro.setAttribute('class', 'card_terceiro');

        const cardTeceiroTitle = document.createElement('h4');
        cardTeceiroTitle.setAttribute('class', 'card_teceiro-title');
        cardTeceiroTitle.textContent = this.getAttribute('title');

        const cardTeceiroText = document.createElement('p');
        cardTeceiroText.setAttribute('class', 'card_teceiro-text');
        cardTeceiroText.textContent = this.getAttribute('text');

        
        componentRoot.appendChild(cardSegundo);
        componentRoot.appendChild(cardTeceiro);

        cardSegundo.appendChild(cardSegundoImg);
        cardSegundo.appendChild(cardSegundoName);
        
        cardTeceiro.appendChild(cardTeceiroTitle);
        cardTeceiro.appendChild(cardTeceiroText);

        return componentRoot;
    }

    styles(){
        const style = document.createElement('style');
        style.textContent = `


        .card{
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            margin-top: 3rem;
            margin-bottom: 2rem;
            padding:1rem;

            width: 35vw;
            height: 25vh;
            border-radius: 5px;
            background-color:#3b4651;
        }

        .card_segundo{
            display: flex;
            gap: 1rem;
        }


        .card_segundo-img{
            width:9%; 
            border-radius: 35px;
            border: 3px  #22dd7a solid;

        }

        .card_segundo-nome{
            color:#fafafa;
            font-weight: 700;
            font-size:1.3rem;
            margin: 0.5rem 0 0 0;
        }
        
        .card_terceiro{
            display: flex;
            flex-direction: column;
        }

        .card_teceiro-title{
            color: #fafafa;
            font-size: 1.5rem;
            margin: 1rem 0 0.4rem 0;
        }

        .card_teceiro-text{
            color: #fafafa;
            font-size: 0.9rem;
            margin:0;
            opacity: 0.7;
            padding-right: 4.5rem;
        }
        
        `

        return style;
    }

}  
customElements.define('new-card', Newcard);



