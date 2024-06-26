const botaoSaibaMais = document.getElementById("saibaMais")

function mostrarInformacoes(){
    botaoSaibaMais.classList.toggle('hide')
}
function  classificar(x) {

    x.max === undefined ? x.max = 5 : false
    x.min === undefined ? x.min = 0 : false
    x.min > x.max ? x.min = x.max : false
    x.disabled === undefined ? x.disabled = false : true
  
    x.target.classList.add("elemento");
    
    for (let i = 1; i <= x.max; i++) {
  
      let s = document.createElement("div");
      s.className = "star";
      x.target.appendChild(s);
  
      if (i <= x.min) { 
        s.classList.add("on");
      }
  
        
  
        s.onmouseout = () => {
          let out = x.target.getElementsByClassName("star");
          for (let y = 0; y < out.length; y++) { 
            out[y].classList.remove("onp");
            out[y].classList.remove("onr");
            out[y].classList.remove("onm");
            out[y].classList.remove("onb");
            out[y].classList.remove("ono");   
          }
        };
        
          if (x.click) { 
            s.onclick = () => { 
              x.click(i);
              s.onmouseout = null; 
              let off = x.target.getElementsByClassName("star");
              for (let z = 0; z < off.length; z++) {
                off[z].classList.add("off"); 
              }
            }; 
          }
      
    }
  
    // x.target.getstars = () => {
    //   return x.target.querySelectorAll(".on").length;
    // };
  
  }
  
  classificar({
    target: document.getElementById("avaliar"),
    max: 5,
    min: 0,
    click : (stars) => { 
      // alert(stars); 
      if(stars == 1) {
        document.getElementById('msg').innerHTML = "Você avaliou com " + stars + " estrela!";
      } else {
        document.getElementById('msg').innerHTML = "Você avaliou com " + stars + " estrelas!";
      }
      
      if(stars == 1){
        document.getElementById('msg').innerHTML += "<img src='imagens/icons_pess.png' alt='Péssimo'/>";
      }
      if(stars == 2){
        document.getElementById('msg').innerHTML += "<img src='imagens/icons_reg.png' alt='Regular'/>";
      }
      if(stars == 3){
        document.getElementById('msg').innerHTML += "<img src='imagens/icons_med.png' alt='Médio'/>";
      }
      if(stars == 4){
        document.getElementById('msg').innerHTML += "<img src='imagens/icons_bom.png' alt='Bom'/>";
      }
      if(stars == 5){
        document.getElementById('msg').innerHTML += "<img src='imagens/icons_oti.png' alt='Ótimo'/>";
      }
  
      document.getElementById('btn').innerHTML = "<button type='button' onclick='location.reload()'> REAVALIAR </button>";
    }
  });