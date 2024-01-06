let body = document.querySelector('body');

window.onload = () => {
    Nav();
    Img();
    Content()
    footer();

}

// Making a Nav Bar
function Nav() {
    let FixedNav = document.createElement('nav');
    body.appendChild(FixedNav);
    const NavNames = {
        home: "Home",
        contact: "Contact",
        about: "About",
        login: "Login"
    }
    for (let key in NavNames) {
        // let names = NavNames[key];
        let links = document.createElement('a');
        links.innerHTML = NavNames[key];
        if (NavNames[key] == 'Login') {
            links.id = 'login';
        }

        FixedNav.appendChild(links);
    }
}

// NavBar Ends here

// Creating Image Container
function Img() {

    let ImgContainer = document.createElement('div');
    ImgContainer.id = `ImgContainer`;
    body.appendChild(ImgContainer);

    // Adding first heading In the Container
    let Heading1 = document.createElement('h1');
    // let name = prompt('Hey user please enter your Name:- ');
    Heading1.textContent = `Hey ${name}!!`;
    ImgContainer.appendChild(Heading1);

    //Adding Second Heading
    let Heading2 = document.createElement('h2');
    Heading2.textContent = `Welcome to my Website`;
    ImgContainer.appendChild(Heading2);

    // Adding Sub-heading
    let SubHeading = document.createElement('p');
    SubHeading.textContent = `
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque aspernatur optio mollitia minima provident iure dolorem distinctio laudantium, esse id placeat, quia officiis cupiditate deleniti vero beatae, in recusandae adipisci!`;
    ImgContainer.appendChild(SubHeading);

    body.appendChild(ImgContainer);
    }
// Image Container Ends Here


function Content() {
    let div = document.createElement('div');
    div.id = `content`;
    body.appendChild(div);
    let p = document.createElement(`p`);
    p.innerHTML = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit vel laboriosam recusandae similique cum quos, architecto consequatur nisi libero harum magnam asperiores quo reiciendis facere nostrum fugiat reprehenderit sint inventore magni nobis non rerum fugit sequi ea. Eos nihil incidunt, obcaecati ea eius harum sed asperiores, modi perferendis velit veniam commodi exercitationem similique dicta ab dolor est.<br> Itaque enim quos at ratione a. Eum odit quam quisquam id? Iste, sed eos, aut obcaecati quo aspernatur dolor nam expedita ullam soluta esse itaque aliquid quisquam nisi sint exercitationem excepturi, <br> alias fuga ipsum est porro consectetur iusto repellat asperiores! Quo nemo obcaecati sed vel laboriosam unde possimus laborum nulla natus, at animi ullam velit! Nobis quis adipisci fuga rerum placeat ut, <br> eum in repudiandae sint officia delectus incidunt soluta cum eligendi earum sed ea blanditiis minima numquam dignissimos iste repellendus voluptate est voluptas? Nemo, repudiandae doloribus nesciunt suscipit et, maiores voluptas cumque nisi unde earum error velit possimus amet inventore nulla sunt laborum,<br> odio impedit autem sed aut cupiditate esse magni. Unde aliquid ipsa amet omnis non perspiciatis error obcaecati voluptatum, esse impedit delectus ducimus deserunt, <br> iure placeat quisquam quo aperiam commodi nostrum. Dolorem dicta velit maiores dignissimos doloribus, recusandae ad nulla tenetur excepturi, quod ipsam, <br> quisquam tempore magni temporibus voluptatibus non! Dolore ut impedit dolores et, laudantium adipisci quaerat labore sint ea laborum, quia vitae qui, autem cupiditate? Aperiam aliquam quae excepturi magnam, et facere, optio hic voluptate iure voluptas ipsa ut impedit distinctio sit? <br>Deleniti voluptates consequuntur a sunt, tempora eveniet magni. At non maiores fugit necessitatibus iusto doloribus quas placeat qui eveniet vitae assumenda earum, beatae totam, iste repudiandae culpa incidunt ullam. Aut ipsa tenetur recusandae nostrum natus ratione molestias quas, dignissimos, aspernatur cum quaerat qui blanditiis ullam impedit nesciunt in, <br>voluptatum explicabo laboriosam quam odit sed itaque perspiciatis tempore. Dolor nostrum illum accusamus dolores adipisci nesciunt repellendus aperiam inventore placeat non eveniet quidem, reiciendis nobis. Commodi optio perspiciatis voluptate eius quos nam magni ducimus consectetur aliquam, inventore non esse veniam ipsam <br>laboriosam architecto aliquid voluptas deserunt saepe placeat, unde quaerat dolores harum dolorem. Voluptatum, commodi. Provident ea placeat velit ducimus esse eius non quas et dolore quidem deleniti dolor consequuntur dicta, debitis iure! Quos nemo omnis praesentium impedit qui tempora, explicabo beatae ducimus quo inventore ipsa saepe recusandae alias velit.<br> Fugiat dolores ut suscipit ipsa est debitis quos ex, optio, quod rerum, error cum accusamus deleniti repudiandae. Quis.`;
    div.appendChild(p);

}

// Footer

function footer(){
    let ul = document.createElement('ul');
    ul.id = `footer`;
    const foot = {
        mobile : `+91 xxxxx xxxxx`,
        tel : `+0250 xxxx xxxx`,
        mail : `abc@xyz.com`,
        address : `Lucknow UttarPradesh 226028 - India`
    }
    for (let key in foot){
        let li = document.createElement('li');
        li.textContent = foot[key];
        ul.appendChild(li);
    }
    body.appendChild(ul);
}