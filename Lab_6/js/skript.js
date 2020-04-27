class PhotoGallery extends HTMLElement {
    constructor() {
        super()
        const div = document.createElement("div");
        const shadow = this.attachShadow({ mode: "open" });
        div.setAttribute("id", "photo-gallery");
        shadow.appendChild(div);
        const style = document.createElement("style");
        style.innerHTML = `
		#photo-gallery
		{
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
        }
		#photo-gallery div
		{
			width: 500px;
			height: 500px;
			margin: 5px;
			display: flex;
			overflow: hidden;
			align-items: center;
            justify-content: center;
            transition:1s;
        }

        #photo-gallery div:hover
        {
            filter:grayscale(70%);
            transform:scale(1.045);
        }
        
		#photo-gallery div#fullscreen
		{
			position: absolute;
			height: 100%;
			width: 100%;
			transition: all .5s ease-out;
            z-index: 3;
            filter:grayscale(0%);
        }
        #photo-gallery div1#fullscreen{
            position: absolute;
            opacity: 0.33;
            z-index: 2;
        }`;
        shadow.appendChild(style);
        if (this.hasAttribute("ImageList")) {
            let piclist = this.getAttribute("ImageList").split(';');
            for (let i of piclist) {
                const element = document.createElement("div");
                element.setAttribute("onclick", "fullscreen(this)");
                const pic = document.createElement("img");
                pic.setAttribute("onerror", "this.src = 'https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg'")
                pic.setAttribute("onload", "check_size(this)")
                pic.setAttribute("src", i);
                element.appendChild(pic);
                div.appendChild(element);
            }
        }
    }
}

function check_size(img) {
    let imgpos = img.getBoundingClientRect();
    if (imgpos.height <= imgpos.width) {
        img.style.height = '500px';
    }
    if (imgpos.height > imgpos.width) {
        img.style.width = '500px';
    }
}

customElements.define("photo-gallery", PhotoGallery);

let full,gallerystyle;


function fullscreen(pic) {


    if (!full) {
        full = true;
        pic.setAttribute("id", "fullscreen");
        gallerystyle = pic.firstChild.getAttribute("style");
        pic.firstChild.setAttribute("style", "height:95vh;");


    } else {
        pic.setAttribute("id", "");
        pic.firstChild.setAttribute("style", gallerystyle);
        full = false;
        check_size(pic);
    }
}

document.body.onload = function() {
    setTimeout(function() {
        let preloader = document.getElementById("loader");
        preloader.style.display = "none";
    }, 100)
}

