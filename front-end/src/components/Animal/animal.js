

const animal = {
    1: {
        id: 1,
        img: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc",
        nome: "Flavio",
        tipo: "Cachorro",
        porte: "Grande",
        sexo: "Macho",
        idade: "5 anos",
        história: "Flavio é um cachorro amável que foi encontrado vagando pelas ruas em busca de comida e abrigo. Ele tem uma personalidade gentil e brincalhona, e rapidamente conquista o coração de todos que o conhecem. Apesar de ter tido um passado difícil, Flavio é extremamente leal e está pronto para encontrar um lar amoroso onde possa receber todo o carinho e cuidado que merece."
    },
      2: {
        id: 2,
        img: "https://www.petz.com.br/blog/wp-content/uploads/2021/11/tipos-de-pitbull3-1280x720.jpg",
        nome: "Vini",
        tipo: "Cachorro",
        porte: "Pequeno",
        sexo: "Macho",
        idade: "8 anos",
        história: "Conheça o adorável Vini: Um cachorro de coração valente à espera de um lar amoroso! Vini chegou até nós após enfrentar muitos desafios em sua jornada pela vida. Com seus 8 anos de idade, ele exibe uma determinação e uma força de espírito que são verdadeiramente inspiradoras. Apesar das dificuldades que enfrentou, Vini mantém um coração cheio de amor e uma disposição alegre para todos que cruzam seu caminho. Ele adora brincar, dar longos passeios e desfrutar de momentos de carinho e afeto. Vini é do tipo que ilumina qualquer ambiente com sua presença contagiante e seu espírito brincalhão. Se você está em busca de um amigo leal e cheio de energia para compartilhar suas aventuras, Vini é o companheiro perfeito. Ao adotá-lo, você estará não apenas oferecendo a ele um lar seguro e acolhedor, mas também ganhando um amigo fiel para a vida toda. Venha conhecer o adorável Vini e descubra como ele pode trazer alegria e amor para sua vida todos os dias!"
      },
      3: {
        id: 3,
        img: "https://ih1.redbubble.net/image.1677539366.0714/aps,504x498,medium,transparent-pad,600x600,f8f8f8.jpg",
        nome: "Felipe",
        tipo: "Gato",
        porte: "Grande",
        sexo: "Macho",
        idade: "7 anos",
        história: "Conheça o encantador Felipe: Um gato majestoso à procura de um lar caloroso! Felipe chegou ao nosso abrigo após ser encontrado vagando pelas ruas, exibindo uma elegância e calma que capturou nossa atenção imediatamente. Com seus 7 anos de idade, ele é um verdadeiro cavalheiro felino, sempre pronto para receber um carinho suave ou compartilhar um momento tranquilo ao sol. Felipe é do tipo que prefere uma vida serena, desfrutando de longas sonecas e observando o mundo ao seu redor com olhos sábios. Se você procura por um companheiro tranquilo e amoroso para trazer serenidade ao seu lar, Felipe é a escolha perfeita. Ao adotá-lo, você estará oferecendo a ele um lugar seguro e acolhedor para passar seus dias, enquanto ele retribui com todo o seu charme e afeto. Venha conhecer o adorável Felipe e descubra como sua presença pode transformar sua vida para sempre!"
      },
      4: {
        id: 4,
        img: "https://t.ctcdn.com.br/QzjtRMp1djLnIW2I5XgPS825Ox4=/640x360/smart/i615361.jpeg",
        nome: "Yzhak",
        tipo: "Gato",
        porte: "Médio",
        sexo: "Macho",
        idade: "9 anos",
        história: "Yzhak é um gato adorável que foi resgatado das ruas quando era apenas um filhote. Ele teve uma infância difícil, mas graças aos cuidados amorosos de seus protetores, ele se transformou em um gato carinhoso e brincalhão. Yzhak adora brincar com bolinhas de papel e tirar sonecas aconchegantes em seu cantinho favorito. Ele está ansioso para encontrar um lar amoroso onde possa receber todo o carinho e atenção que merece."
      },
      5: {
        id: 5,
        img: "https://img.freepik.com/fotos-gratis/jovem-buldogue-frances-marrom-jogando-isolado-no-fundo-branco-do-estudio_155003-46058.jpg?t=st=1711629302~exp=1711632902~hmac=edd189535dd6ff7035abc4dce10531aab25ee52af1fdc0f2d8c29c973f5bcc98&w=1380",
        nome: "Luna",
        tipo: "Cachorro",
        porte: "Médio",
        sexo: "Fêmea",
        idade: "3 anos",
        história: "Luna é uma cachorrinha muito dócil que adora brincar e receber carinho. Ela foi encontrada abandonada na rua e desde então tem sido cuidada com muito amor. Luna está em busca de um lar acolhedor onde possa ser amada e retribuir todo o afeto que tem para oferecer."
    },
    6: {
        id: 6,
        img: "https://img.freepik.com/fotos-gratis/cachorrinho-fofo-de-volta-a-escola_23-2148985921.jpg?t=st=1711629379~exp=1711632979~hmac=7573f009cc9b729b3b10fb751222bffe5defa2036fce90529a2725a3270f66b6&w=1380",
        nome: "Branco",
        tipo: "Cachorro",
        porte: "Pequeno",
        sexo: "Macho",
        idade: "2 anos",
        história: "Branco é um cachorrinho alegre e brincalhão que adora correr e explorar novos lugares. Ele é muito sociável e se dá bem com outros animais. Encontrado abandonado na rua, Branco espera encontrar uma família amorosa que possa dar a ele todo o carinho e cuidado que merece."
    },
    7: {
        id: 7,
        img: "https://img.freepik.com/fotos-gratis/lindo-retrato-de-animal-de-estimacao-isolado_23-2149192357.jpg?t=st=1711629417~exp=1711633017~hmac=10739cbab90b88381da329fb1f560910279ace571bb8865185d1e618e70c840a&w=1380",
        nome: "Mel",
        tipo: "Cachorro",
        porte: "Grande",
        sexo: "Fêmea",
        idade: "4 anos",
        história: "Mel é uma cadela doce e amorosa que adora brincar e receber atenção. Ela foi resgatada de um abrigo onde estava há algum tempo esperando por uma família. Mel está pronta para encontrar um lar onde possa ser feliz e fazer seus donos felizes também."
    },
    // Continuar com mais objetos seguindo o mesmo padrão...
    8: {
      id: 8,
      img: "https://img.freepik.com/fotos-gratis/feche-o-gato-fofo-dentro-de-casa_23-2148882585.jpg?size=626&ext=jpg&ga=GA1.1.1459418701.1707737255&semt=sph",
      nome: "Luma",
      tipo: "Gato",
      porte: "Médio",
      sexo: "Fêmea",
      idade: "2 anos",
      história: "Luna é uma gatinha adorável que adora brincar com bolinhas de lã e tomar longos cochilos ao sol. Ela foi encontrada abandonada em uma caixa na rua e desde então tem sido cuidada com muito amor. Luna está em busca de um lar onde possa receber todo o carinho e atenção que merece."
  },
  9: {
      id: 9,
      img: "https://img.freepik.com/fotos-gratis/lindo-gato-peludo-relaxando-dentro-de-casa_23-2150679180.jpg?size=626&ext=jpg&ga=GA1.1.1459418701.1707737255&semt=sph",
      nome: "Spike",
      tipo: "Gato",
      porte: "Grande",
      sexo: "Macho",
      idade: "5 anos",
      história: "Spike é um gato tranquilo e afetuoso que adora passar o tempo observando os pássaros pela janela. Ele foi resgatado de um abrigo onde estava esperando por uma segunda chance. Spike espera encontrar um lar onde possa relaxar e desfrutar da companhia de sua família para sempre."
  },
  10: {
      id: 10,
      img: "https://img.freepik.com/fotos-gratis/close-vertical-de-um-lindo-gato-europeu-de-pelo-curto_181624-34587.jpg?size=626&ext=jpg&ga=GA1.1.1459418701.1707737255&semt=sph",
      nome: "Bella",
      tipo: "Gato",
      porte: "Pequeno",
      sexo: "Fêmea",
      idade: "3 anos",
      história: "Bella é uma gatinha brincalhona e cheia de energia que adora explorar todos os cantos da casa. Ela foi resgatada das ruas quando ainda era filhote e desde então tem sido uma companheira leal e amorosa. Bella está em busca de um lar onde possa continuar espalhando alegria e receber todo o amor que merece."
  }
  
}

export default animal
