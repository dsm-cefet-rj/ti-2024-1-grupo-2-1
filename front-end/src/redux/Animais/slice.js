import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    animals: [
        {
            id: 1,
            isfav: false,
            img: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc",
            nome: "Flavio",
            tipo: "Cachorro",
            porte: "Grande",
            sexo: "Macho",
            idade: "5 anos",
            história:
                "Flavio é um cachorro amável que foi encontrado vagando pelas ruas em busca de comida e abrigo. Ele tem uma personalidade gentil e brincalhona, e rapidamente conquista o coração de todos que o conhecem. Apesar de ter tido um passado difícil, Flavio é extremamente leal e está pronto para encontrar um lar amoroso onde possa receber todo o carinho e cuidado que merece.",
        },
        {
            id: 2,
            isfav: false,
            img: "https://www.petz.com.br/blog/wp-content/uploads/2021/11/tipos-de-pitbull3-1280x720.jpg",
            nome: "Vini",
            tipo: "Cachorro",
            porte: "Pequeno",
            sexo: "Macho",
            idade: "8 anos",
            história:
                "Conheça o adorável Vini: Um cachorro de coração valente à espera de um lar amoroso! Vini chegou até nós após enfrentar muitos desafios em sua jornada pela vida. Com seus 8 anos de idade, ele exibe uma determinação e uma força de espírito que são verdadeiramente inspiradoras. Apesar das dificuldades que enfrentou, Vini mantém um coração cheio de amor e uma disposição alegre para todos que cruzam seu caminho. Ele adora brincar, dar longos passeios e desfrutar de momentos de carinho e afeto. Vini é do tipo que ilumina qualquer ambiente com sua presença contagiante e seu espírito brincalhão. Se você está em busca de um amigo leal e cheio de energia para compartilhar suas aventuras, Vini é o companheiro perfeito. Ao adotá-lo, você estará não apenas oferecendo a ele um lar seguro e acolhedor, mas também ganhando um amigo fiel para a vida toda. Venha conhecer o adorável Vini e descubra como ele pode trazer alegria e amor para sua vida todos os dias!",
        },
        {
            id: 3,
            isfav: false,
            img: "https://ih1.redbubble.net/image.1677539366.0714/aps,504x498,medium,transparent-pad,600x600,f8f8f8.jpg",
            nome: "Felipe",
            tipo: "Gato",
            porte: "Grande",
            sexo: "Macho",
            idade: "7 anos",
            história:
                "Conheça o encantador Felipe: Um gato majestoso à procura de um lar caloroso! Felipe chegou ao nosso abrigo após ser encontrado vagando pelas ruas, exibindo uma elegância e calma que capturou nossa atenção imediatamente. Com seus 7 anos de idade, ele é um verdadeiro cavalheiro felino, sempre pronto para receber um carinho suave ou compartilhar um momento tranquilo ao sol. Felipe é do tipo que prefere uma vida serena, desfrutando de longas sonecas e observando o mundo ao seu redor com olhos sábios. Se você procura por um companheiro tranquilo e amoroso para trazer serenidade ao seu lar, Felipe é a escolha perfeita. Ao adotá-lo, você estará oferecendo a ele um lugar seguro e acolhedor para passar seus dias, enquanto ele retribui com todo o seu charme e afeto. Venha conhecer o adorável Felipe e descubra como sua presença pode transformar sua vida para sempre!",
        },
        {
            id: 4,
            isfav: false,
            img: "https://t.ctcdn.com.br/QzjtRMp1djLnIW2I5XgPS825Ox4=/640x360/smart/i615361.jpeg",
            nome: "Yzhak",
            tipo: "Gato",
            porte: "Médio",
            sexo: "Macho",
            idade: "9 anos",
            história:
                "Yzhak é um gato adorável que foi resgatado das ruas quando era apenas um filhote. Ele teve uma infância difícil, mas graças aos cuidados amorosos de seus protetores, ele se transformou em um gato carinhoso e brincalhão. Yzhak adora brincar com bolinhas de papel e tirar sonecas aconchegantes em seu cantinho favorito. Ele está ansioso para encontrar um lar amoroso onde possa receber todo o carinho e atenção que merece.",
        },
        {
            id: 5,
            isfav: false,
            img: "https://img.freepik.com/fotos-gratis/jovem-buldogue-frances-marrom-jogando-isolado-no-fundo-branco-do-estudio_155003-46058.jpg?t=st=1711629302~exp=1711632902~hmac=edd189535dd6ff7035abc4dce10531aab25ee52af1fdc0f2d8c29c973f5bcc98&w=1380",
            nome: "Luna",
            tipo: "Cachorro",
            porte: "Médio",
            sexo: "Fêmea",
            idade: "3 anos",
            história:
                "Luna é uma cachorrinha muito dócil que adora brincar e receber carinho. Ela foi encontrada abandonada na rua e desde então tem sido cuidada com muito amor. Luna está em busca de um lar acolhedor onde possa ser amada e retribuir todo o afeto que tem para oferecer.",
        },
        {
            id: 6,
            isfav: false,
            img: "https://img.freepik.com/fotos-gratis/cachorrinho-fofo-de-volta-a-escola_23-2148985921.jpg?t=st=1711629379~exp=1711632979~hmac=7573f009cc9b729b3b10fb751222bffe5defa2036fce90529a2725a3270f66b6&w=1380",
            nome: "Branco",
            tipo: "Cachorro",
            porte: "Pequeno",
            sexo: "Macho",
            idade: "2 anos",
            história:
                "Branco é um cachorrinho alegre e brincalhão que adora correr e explorar novos lugares. Ele é muito sociável e se dá bem com outros animais. Encontrado abandonado na rua, Branco espera encontrar uma família amorosa que possa dar a ele todo o carinho e cuidado que merece.",
        },
        {
            id: 7,
            isfav: false,
            img: "https://img.freepik.com/fotos-gratis/lindo-retrato-de-animal-de-estimacao-isolado_23-2149192357.jpg?t=st=1711629417~exp=1711633017~hmac=10739cbab90b88381da329fb1f560910279ace571bb8865185d1e618e70c840a&w=1380",
            nome: "Mel",
            tipo: "Cachorro",
            porte: "Grande",
            sexo: "Fêmea",
            idade: "4 anos",
            história:
                "Mel é uma cadela doce e amorosa que adora brincar e receber atenção. Ela foi resgatada de um abrigo onde estava há algum tempo esperando por uma família. Mel está pronta para encontrar um lar onde possa ser feliz e fazer seus donos felizes também.",
        },

        {
            id: 8,
            isfav: false,
            img: "https://img.freepik.com/fotos-gratis/feche-o-gato-fofo-dentro-de-casa_23-2148882585.jpg?size=626&ext=jpg&ga=GA1.1.1459418701.1707737255&semt=sph",
            nome: "Luma",
            tipo: "Gato",
            porte: "Médio",
            sexo: "Fêmea",
            idade: "2 anos",
            história:
                "Luna é uma gatinha adorável que adora brincar com bolinhas de lã e tomar longos cochilos ao sol. Ela foi encontrada abandonada em uma caixa na rua e desde então tem sido cuidada com muito amor. Luna está em busca de um lar onde possa receber todo o carinho e atenção que merece.",
        },
        {
            id: 9,
            isfav: false,
            img: "https://img.freepik.com/fotos-gratis/lindo-gato-peludo-relaxando-dentro-de-casa_23-2150679180.jpg?size=626&ext=jpg&ga=GA1.1.1459418701.1707737255&semt=sph",
            nome: "Spike",
            tipo: "Gato",
            porte: "Grande",
            sexo: "Macho",
            idade: "5 anos",
            história:
                "Spike é um gato tranquilo e afetuoso que adora passar o tempo observando os pássaros pela janela. Ele foi resgatado de um abrigo onde estava esperando por uma segunda chance. Spike espera encontrar um lar onde possa relaxar e desfrutar da companhia de sua família para sempre.",
        },
        {
            id: 10,
            isfav: false,
            img: "https://img.freepik.com/fotos-gratis/close-vertical-de-um-lindo-gato-europeu-de-pelo-curto_181624-34587.jpg?size=626&ext=jpg&ga=GA1.1.1459418701.1707737255&semt=sph",
            nome: "Bella",
            tipo: "Gato",
            porte: "Pequeno",
            sexo: "Fêmea",
            idade: "3 anos",
            história:
                "Bella é uma gatinha brincalhona e cheia de energia que adora explorar todos os cantos da casa. Ela foi resgatada das ruas quando ainda era filhote e desde então tem sido uma companheira leal e amorosa. Bella está em busca de um lar onde possa continuar espalhando alegria e receber todo o amor que merece.",
        },
        {
            id: 11,
            isfav: false,
            img: "https://img.freepik.com/fotos-premium/cao-de-border-collie-curioso-fechado-olhando-para-a-camera-isolada-em-fundo-azul_77749-687.jpg?w=996",
            nome: "Rufus",
            tipo: "Cachorro",
            porte: "Grande",
            sexo: "Macho",
            idade: "3 anos",
            história:
                "Rufus é um cachorro amável que foi encontrado vagando pelas ruas em busca de comida e abrigo. Ele tem uma personalidade gentil e brincalhona, e rapidamente conquista o coração de todos que o conhecem. Apesar de ter tido um passado difícil, Rufus é extremamente leal e está pronto para encontrar um lar amoroso onde possa receber todo o carinho e cuidado que merece.",
        },
        {
            id: 12,
            isfav: false,
            img: "https://img.freepik.com/fotos-gratis/cachorro-com-olhos-azuis_181624-22621.jpg?t=st=1712059561~exp=1712063161~hmac=09e4a4d139623136d2af9e45d7393dd125d79edeafcaf1e4da1bb41f4fbb4c88&w=996",
            nome: "Bolt",
            tipo: "Cachorro",
            porte: "Pequeno",
            sexo: "Macho",
            idade: "6 anos",
            história:
                "Conheça o adorável Bolt: Um cachorro de coração valente à espera de um lar amoroso! Bolt chegou até nós após enfrentar muitos desafios em sua jornada pela vida. Com seus 6 anos de idade, ele exibe uma determinação e uma força de espírito que são verdadeiramente inspiradoras. Apesar das dificuldades que enfrentou, Bolt mantém um coração cheio de amor e uma disposição alegre para todos que cruzam seu caminho. Ele adora brincar, dar longos passeios e desfrutar de momentos de carinho e afeto. Bolt é do tipo que ilumina qualquer ambiente com sua presença contagiante e seu espírito brincalhão. Se você está em busca de um amigo leal e cheio de energia para compartilhar suas aventuras, Bolt é o companheiro perfeito. Ao adotá-lo, você estará não apenas oferecendo a ele um lar seguro e acolhedor, mas também ganhando um amigo fiel para a vida toda. Venha conhecer o adorável Bolt e descubra como ele pode trazer alegria e amor para sua vida todos os dias!",
        },
        {
            id: 13,
            isfav: false,
            img: "https://img.freepik.com/fotos-gratis/gato-branco-esta-de-joelhos-de-mulher_8353-539.jpg?size=626&ext=jpg&ga=GA1.1.1459418701.1707737255&semt=sph",
            nome: "Fiona",
            tipo: "Gato",
            porte: "Grande",
            sexo: "Fêmea",
            idade: "8 anos",
            história:
                "Conheça a encantadora Fiona: Uma gata majestosa à procura de um lar caloroso! Fiona chegou ao nosso abrigo após ser encontrada vagando pelas ruas, exibindo uma elegância e calma que capturou nossa atenção imediatamente. Com seus 8 anos de idade, ela é uma verdadeiro dama felina, sempre pronta para receber um carinho suave ou compartilhar um momento tranquilo ao sol. Fiona é do tipo que prefere uma vida serena, desfrutando de longas sonecas e observando o mundo ao seu redor com olhos sábios. Se você procura por uma companheira tranquila e amorosa para trazer serenidade ao seu lar, Fiona é a escolha perfeita. Ao adotá-la, você estará oferecendo a ela um lugar seguro e acolhedor para passar seus dias, enquanto ela retribui com todo o seu charme e afeto. Venha conhecer a adorável Fiona e descubra como sua presença pode transformar sua vida para sempre!",
        },
        {
            id: 14,
            isfav: false,
            img: "https://img.freepik.com/fotos-gratis/um-gato-brincalhao-espreitando-por-tras-de-uma-superficie-branca_60438-3920.jpg?size=626&ext=jpg&ga=GA1.1.1459418701.1707737255&semt=sph",
            nome: "Whiskers",
            tipo: "Gato",
            porte: "Médio",
            sexo: "Macho",
            idade: "10 anos",
            história:
                "Whiskers é um gato adorável que foi resgatado das ruas quando era apenas um filhote. Ele teve uma infância difícil, mas graças aos cuidados amorosos de seus protetores, ele se transformou em um gato carinhoso e brincalhão. Whiskers adora brincar com bolinhas de papel e tirar sonecas aconchegantes em seu cantinho favorito. Ele está ansioso para encontrar um lar amoroso onde possa receber todo o carinho e atenção que merece.",
        },
        {
            id: 15,
            isfav: false,
            img: "https://img.freepik.com/fotos-gratis/beagles-filhotes-procurando-algo_1150-18193.jpg?t=st=1712059599~exp=1712063199~hmac=85514f2ad7ded4b0d2da29f0141e8cc95ec0400036b81be28fc63b5a0c685bdc&w=1380",
            nome: "Stella",
            tipo: "Cachorro",
            porte: "Médio",
            sexo: "Fêmea",
            idade: "1 anos",
            história:
                "Stella é uma cachorrinha muito dócil que adora brincar e receber carinho. Ela foi encontrada abandonada na rua e desde então tem sido cuidada com muito amor. Stella está em busca de um lar acolhedor onde possa ser amada e retribuir todo o afeto que tem para oferecer.",
        },
        {
            id: 16,
            isfav: false,
            img: "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg?t=st=1712059471~exp=1712063071~hmac=9c949cb55417557cd5bd9b9c96645d0de9589c8caa744acdf12f1f36f60e478a&w=1380",
            nome: "Richyele",
            tipo: "Cachorro",
            porte: "Médio",
            sexo: "Fêmea",
            idade: "2 anos",
            história:
                "Richyele é uma cachorrinha muito dócil que adora brincar e receber carinho. Ela foi encontrada abandonada na rua e desde então tem sido cuidada com muito amor. Richyele está em busca de um lar acolhedor onde possa ser amada e retribuir todo o afeto que tem para oferecer.",
        },
        {
            id: 17,
            isfav: false,
            img: "https://img.freepik.com/fotos-gratis/em-fuga-o-cachorrinho-maltipu-esta-posando_155003-22631.jpg?t=st=1712059498~exp=1712063098~hmac=c6f0f4985de3a6391e12cf23b2e04453671edbe1a3168acc5d2ce09f27d26bf6&w=1380",
            nome: "Milena",
            tipo: "Cachorro",
            porte: "Pequeno",
            sexo: "Fêmea",
            idade: "1 ano",
            história:
                "Milena é uma cachorrinha alegre e brincalhona que adora correr e explorar novos lugares. Ela é muito sociável e se dá bem com outros animais. Encontrada abandonada na rua, Milena espera encontrar uma família amorosa que possa dar a ela todo o carinho e cuidado que merece.",
        },
        {
            id: 18,
            isfav: false,
            img: "https://as1.ftcdn.net/v2/jpg/07/06/97/56/1000_F_706975647_6Dm65UnynJ7xCxR0vSs4RajV1WmG2oJG.jpg",
            nome: "Luisa",
            tipo: "Cachorro",
            porte: "Grande",
            sexo: "Fêmea",
            idade: "5 anos",
            história:
                "Luisa é uma cadela doce e amorosa que adora brincar e receber atenção. Ela foi resgatada de um abrigo onde estava há algum tempo esperando por uma família. Luisa está pronta para encontrar um lar onde possa ser feliz e fazer seus donos felizes também.",
        },

        {
            id: 19,
            isfav: false,
            img: "https://img.freepik.com/fotos-gratis/gato-selvagem-preto-com-olhos-verdes_181624-20030.jpg?size=626&ext=jpg&ga=GA1.1.1459418701.1707737255&semt=sph",
            nome: "Luma",
            tipo: "Gato",
            porte: "Médio",
            sexo: "Fêmea",
            idade: "2 anos",
            história:
                "Luma é uma gatinha adorável que adora brincar com bolinhas de lã e tomar longos cochilos ao sol. Ela foi encontrada abandonada em uma caixa na rua e desde então tem sido cuidada com muito amor. Luma está em busca de um lar onde possa receber todo o carinho e atenção que merece.",
        },
        {
            id: 20,
            isfav: false,
            img: "https://img.freepik.com/fotos-gratis/gatinho-adoravel-com-oculos-de-sol_23-2150886414.jpg?size=626&ext=jpg&ga=GA1.1.1459418701.1707737255&semt=sph",
            nome: "Mila",
            tipo: "Gato",
            porte: "Médio",
            sexo: "Macho",
            idade: "5 anos",
            história:
                "Mila é um gato tranquilo e afetuoso que adora passar o tempo observando os pássaros pela janela. Ele foi resgatado de um abrigo onde estava esperando por uma segunda chance. Mila espera encontrar um lar onde possa relaxar e desfrutar da companhia de sua família para sempre.",
        },
    ],
};

const animalSlice = createSlice({
    name: "animal",
    initialState,
    reducers: {

    }
});

export const {} = animalSlice.actions;

export default animalSlice.reducer;