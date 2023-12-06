
class Navcomponents extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: 'open' });
      
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'cabecalho_informacoes-gerais');

        const image = document.createElement('img');
        image.setAttribute('class', 'cabecalho_informacoes-img');
        image.src = this.getAttribute('img') || './assets/image/default-image.jpg';
        image.alt= 'logo da dio';
        

        const nav = document.createElement('nav');
        nav.setAttribute('class', 'informacoes-nav')
       
        const orderedList = document.createElement('ul');
        orderedList.setAttribute('class', 'orderedList');


        const list1 = document.createElement('li');
        list1.setAttribute('class', 'list');
        list1.textContent = this.getAttribute('texto1');

        const list2 = document.createElement('li');
        list2.setAttribute('class', 'list');
        list2.textContent = this.getAttribute('texto2');

        const list3 = document.createElement('li');
        list3.setAttribute('class', 'list');
        list3.textContent = this.getAttribute('texto3');

        const list4 = document.createElement('li');
        list4.setAttribute('class', 'list');
        list4.textContent = this.getAttribute('texto4');

        const list5 = document.createElement('li');
        list5.setAttribute('class', 'list');
        list5.textContent = this.getAttribute('texto5');

        const list6 = document.createElement('li');
        list6.setAttribute('class', 'list');
        list6.textContent = this.getAttribute('texto6');

        const list7 = document.createElement('li');
        list7.setAttribute('class', 'list7');
        list7.textContent = this.getAttribute('texto7');
        
        
        componentRoot.appendChild(image);
        componentRoot.appendChild(nav);
        nav.appendChild(orderedList);
        orderedList.appendChild(list1);
        orderedList.appendChild(list2);
        orderedList.appendChild(list3);
        orderedList.appendChild(list4);
        orderedList.appendChild(list5);
        orderedList.appendChild(list6);
        orderedList.appendChild(list7);


        return componentRoot;
    }



    styles(){
        const style = document.createElement('style');
       style.textContent = `

        .cabecalho_informacoes-gerais{
            display:flex;
        }

        .cabecalho_informacoes-img{
            width: 7%;
            border-radius: 10px;
            margin: 1rem;
        }

        .orderedList{
            display:flex;
            gap: 1rem;
            
        }

        .list{
            color:#fff ;
            list-style: none;
            font-size: 1rem;
            font-weight: bold;
            margin-top: 0.9rem;
            cursor: pointer;
        }
        
        .list:hover{
            color: #af00fe;
        }
    

        .list7{
            list-style: none;
            font-size: 1rem;
            font-weight: bold;
            padding: 0.6rem;
            margin-top: 0.3rem;

            border-radius: 25px;
            background-color:#e5e145;
            color: #000;
            cursor: pointer;
        }

        .list7:hover {
            color: #fff;
        }

       
        
        
        
        
        `
        return style;
    }
}

customElements.define('nav-components', Navcomponents);
