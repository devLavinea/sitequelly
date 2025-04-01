var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: false,
});

var swiper2 = new Swiper(".mySwiper2", {
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  loop: false,
});

$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });

  ScrollReveal().reveal("#page_car_text h2", {
    origin: "top",
    duration: 2000,
    distance: "20%",
  });
});

var caminho = window.location.search;
console.log(caminho);

if (caminho === "?carros=carro_cretanline") {
  let img1 = document.querySelector("#car_1");
  img1.setAttribute("src", "/src/images/cretanline.1.jpg");

  let img2 = document.querySelector("#car_2");
  img2.setAttribute("src", "/src/images/cretanline.2.jpg");

  let img3 = document.querySelector("#car_3");
  img3.setAttribute("src", "/src/images/cretanline.3.jpg");

  let img4 = document.querySelector("#car_4");
  img4.setAttribute("src", "/src/images/cretanline.4.jpg");

  let img5 = document.querySelector("#car_5");
  img5.setAttribute("src", "/src/images/creta.jpg");

  let img6 = document.querySelector("#car_6");
  img6.setAttribute("src", "/src/images/cretanline.5.jpg");

  let img7 = document.querySelector("#car_7");
  img7.setAttribute("src", "/src/images/cretanline.6.jpg");

  let img8 = document.querySelector("#car_8");
  img8.setAttribute("src", "/src/images/cretanline.7.jpg");

  let img9 = document.querySelector("#car_9");
  img9.setAttribute("src", "/src/images/cretanline.8.jpg");

  let text = document.querySelector("#page_car_text_1");
  text.innerHTML =
    "O Creta N Line é a versão esportiva do SUV compacto da Hyundai, destacando-se pelo visual mais arrojado e detalhes exclusivos. Equipado com motorização 1.0 turbo, oferece um bom desempenho aliado à eficiência de combustível. <br>Seu design é mais agressivo, com grade frontal diferenciada, rodas de aro 17 e detalhes em preto e vermelho. No interior, o Creta N Line conta com acabamento sofisticado, central multimídia de 10,25 polegadas, ar-condicionado digital e volante com acabamento esportivo. Combinando estilo, performance e tecnologia, é perfeito para quem busca um SUV com toque de esportividade.";

  let text_2 = document.querySelector("#page_car_title");
  text_2.textContent = "Creta N Line";

  let button = document.querySelector("#button_car");
  button.setAttribute("href", "https://wa.link/kqupn6");
}

if (caminho === "?carros=carro_hb20comfort") {
  let img1 = document.querySelector("#car_1");
  img1.setAttribute("src", "/src/images/hb20.1.3.jpg");

  let img2 = document.querySelector("#car_2");
  img2.setAttribute("src", "/src/images/hb20.1.2.jpg");

  let img3 = document.querySelector("#car_3");
  img3.setAttribute("src", "/src/images/hb20.1.7.jpg");

  let img4 = document.querySelector("#car_4");
  img4.setAttribute("src", "/src/images/hb20.1.jpg");

  let img5 = document.querySelector("#car_5");
  img5.setAttribute("src", "/src/images/hb20.1.10.jpg");

  let img6 = document.querySelector("#car_6");
  img6.setAttribute("src", "/src/images/hb20.1.1.jpg");

  let img7 = document.querySelector("#car_7");
  img7.setAttribute("src", "/src/images/hb20.1.5.jpg");

  let img8 = document.querySelector("#car_8");
  img8.setAttribute("src", "/src/images/hb20.1.4.jpg");

  let img9 = document.querySelector("#car_9");
  img9.setAttribute("src", "/src/images/hb20.1.6.jpg");

  let text = document.querySelector("#page_car_text_1");
  text.innerHTML =
    "O Hyundai HB20 Comfort é a versão de entrada do popular hatch da marca, oferecendo um excelente custo-benefício. Equipado com motor 1.0, proporciona bom desempenho e eficiência no consumo de combustível.<br> Seu design é moderno e arrojado, enquanto o interior conta com acabamento simples, mas funcional, com central multimídia de 8 polegadas, ar-condicionado e direção elétrica. Em termos de segurança, o modelo oferece controle de estabilidade, assistente de partida em rampa e airbags. O HB20 Comfort é ideal para quem busca praticidade, economia e confiabilidade no dia a dia.";

  let text_2 = document.querySelector("#page_car_title");
  text_2.textContent = "HB20 Comfort";

  let button = document.querySelector("#button_car");
  button.setAttribute("href", "https://wa.link/40lsqc");
}

if (caminho === "?carros=carro_tucson") {
  let img1 = document.querySelector("#car_1");
  img1.setAttribute("src", "/src/images/tucson.1.jpg");

  let img2 = document.querySelector("#car_2");
  img2.setAttribute("src", "/src/images/tucson.2.jpg");

  let img3 = document.querySelector("#car_3");
  img3.setAttribute("src", "/src/images/tucson.4.jpg");

  let img4 = document.querySelector("#car_4");
  img4.setAttribute("src", "/src/images/tucson.5.jpg");

  let img5 = document.querySelector("#car_5");
  img5.setAttribute("src", "/src/images/tucson.6.jpg");

  let img6 = document.querySelector("#car_6");
  img6.setAttribute("src", "/src/images/tucson.7.jpg");

  let img7 = document.querySelector("#car_7");
  img7.setAttribute("src", "/src/images/tucson.jpg");

  let img8 = document.querySelector("#car_8");
  img8.setAttribute("src", "/src/images/tucson.8.jpg");

  let img9 = document.querySelector("#car_9");
  img9.setAttribute("src", "/src/images/tucson.9.jpg");

  let text = document.querySelector("#page_car_text_1");
  text.innerHTML =
    "O Hyundai Tucson é um SUV que combina design moderno, conforto e tecnologia. Disponível em versões com motorização híbrida ou a combustão, oferece excelente desempenho e eficiência de combustível. <br>Seu interior é espaçoso e bem-acabado, com painel digital, central multimídia de 10,25 polegadas, ar-condicionado de duas zonas e carregador wireless. Em termos de segurança, o Tucson conta com diversos sistemas de assistência ao motorista, como controle de estabilidade, monitoramento de ponto cego e sete airbags. Ideal para quem busca um SUV completo e sofisticado.";

  let text_2 = document.querySelector("#page_car_title");
  text_2.textContent = "Tucson";

  let button = document.querySelector("#button_car");
  button.setAttribute("href", "https://wa.link/l3m30q");
}

if (caminho === "?carros=carro_palisade") {
  let img1 = document.querySelector("#car_1");
  img1.setAttribute("src", "/src/images/palisade.1.jpg");

  let img2 = document.querySelector("#car_2");
  img2.setAttribute("src", "/src/images/palisade.2.jpg");

  let img3 = document.querySelector("#car_3");
  img3.setAttribute("src", "/src/images/palisade.4.jpg");

  let img4 = document.querySelector("#car_4");
  img4.setAttribute("src", "/src/images/palisade.5.jpg");

  let img5 = document.querySelector("#car_5");
  img5.setAttribute("src", "/src/images/palisade.4.jpg");

  let img6 = document.querySelector("#car_6");
  img6.setAttribute("src", "/src/images/palisade.5.jpg");

  let img7 = document.querySelector("#car_7");
  img7.setAttribute("src", "/src/images/palisade.6.jpg");

  let img8 = document.querySelector("#car_8");
  img8.setAttribute("src", "/src/images/palisade.7.jpg");

  let img9 = document.querySelector("#car_9");
  img9.setAttribute("src", "/src/images/palisade.8.jpg");

  let text = document.querySelector("#page_car_text_1");
  text.innerHTML =
    "O Hyundai Palisade é um SUV de grande porte que combina luxo, desempenho e versatilidade. Equipado com motor V6 3.8, oferece uma performance robusta e confortável, ideal para longas viagens.<br> Seu interior espaçoso acomoda até 7 passageiros, com acabamento refinado e tecnologias avançadas, como tela de 12,3 polegadas, sistema de som premium, ar-condicionado de 3 zonas e carregamento sem fio. Na segurança, traz assistentes de condução, controle de estabilidade e sete airbags. O Palisade é perfeito para quem busca sofisticação, conforto e potência.";

  let text_2 = document.querySelector("#page_car_title");
  text_2.textContent = "Palisade";

  let button = document.querySelector("#button_car");
  button.setAttribute("href", "https://wa.link/lr1tvv");
}

if (caminho === "?carros=carro_cretaplatinum") {
  let img1 = document.querySelector("#car_1");
  img1.setAttribute("src", "/src/images/cretaplatinum.1.jpg");

  let img2 = document.querySelector("#car_2");
  img2.setAttribute("src", "/src/images/cretaplatinum.2.jpg");

  let img3 = document.querySelector("#car_3");
  img3.setAttribute("src", "/src/images/cretaplatinum.3.jpg");

  let img4 = document.querySelector("#car_4");
  img4.setAttribute("src", "/src/images/cretaplatinum.4.jpg");

  let img5 = document.querySelector("#car_5");
  img5.setAttribute("src", "/src/images/cretaplatinum.jpg");

  let img6 = document.querySelector("#car_6");
  img6.setAttribute("src", "/src/images/cretaplatinum.5.jpg");

  let img7 = document.querySelector("#car_7");
  img7.setAttribute("src", "/src/images/cretaplatinum.6.jpg");

  let img8 = document.querySelector("#car_8");
  img8.setAttribute("src", "/src/images/cretaplatinum.7.jpg");

  let img9 = document.querySelector("#car_9");
  img9.setAttribute("src", "/src/images/cretaplatinum.8.jpg");

  let text = document.querySelector("#page_car_text_1");
  text.innerHTML =
    "O Creta Platinum é a versão topo de linha do SUV compacto da Hyundai, oferecendo um design moderno e sofisticado. Com motorização 1.0 turbo, proporciona desempenho ágil e eficiente, aliado a uma excelente economia de combustível.<br> No interior, conta com acabamento premium, telas de 10,25 polegadas para o painel e central multimídia, ar-condicionado digital, câmera de ré, e carregador wireless. Segurança é destaque com diversos recursos, como controle de estabilidade, assistente de partida em rampa e sete airbags. Ideal para quem busca conforto, tecnologia e performance.";

  let text_2 = document.querySelector("#page_car_title");
  text_2.textContent = "Creta Platinum";

  let button = document.querySelector("#button_car");
  button.setAttribute("href", "https://wa.link/hd2fgy");
}
