import { Benefit, Feature, Testimonial, Bonus, FAQItem, DesignStyle, PendantType, ChainLength, PackagingOption, MaterialOption } from "./types";

export const SALES_COPY = {
  headline: "El Collar Que No Solo Completa Tu Outfit… Te Completa a Ti",
  subheadline: "Descubre la joya artesanal en plata que miles de mujeres ya llevan cerca del corazón — diseñada a mano, cargada de significado, y pensada para que cada vez que la uses, el mundo sepa exactamente quién eres sin que tengas que decir una sola palabra.",
  
  problem: {
    question: "¿Te ha pasado que te arreglas, te pones ese atuendo que tanto te gusta… y aun así sientes que algo falta?",
    paragraph1: "Revisas el espejo. La ropa está bien. El cabello, también. Pero hay algo que no termina de cuadrar. Esa chispa que convierte un look en una declaración de intención. Ese detalle que hace que la gente te mire dos veces y piense: \"ella tiene algo especial.\"",
    paragraph2: "O quizás ya tienes joyas. Pero son esas piezas genéricas que compraste de prisa, que se oscurecen a los tres meses, que se rompen en el peor momento posible, y que en el fondo sabes que no dicen nada de ti. Joyas de plástico disfrazadas de metal. Accesorios descartables en un mundo que ya tiene demasiados.",
    paragraph3: "Y no hablemos de cuándo necesitas hacer un regalo para alguien especial. Esa angustia de querer dar algo bonito, significativo, que no parezca comprado a último momento… pero que tampoco te cueste una fortuna. Recorres tiendas, ves catálogos en línea, y todo parece o demasiado ordinario o demasiado caro.",
    frustration: "La frustración es real. Y tiene nombre: la falta de acceso a piezas que sean verdaderamente bellas, duraderas y que cuenten una historia.",
    resolution: "Hasta hoy."
  },

  story: {
    title: "Una historia que cambia la perspectiva",
    paragraph1: "Permíteme contarte algo que le pasó a una de nuestras clientas, Valentina, de 28 años.",
    paragraph2: "Valentina llevaba meses buscando un collar para su graduación. No quería algo masivo, no quería algo genérico. Quería algo que marcara ese momento — ese punto de quiebre entre quien era y quien estaba a punto de convertirse. Visitó tiendas de centros comerciales. Todo le parecía fabricado en serie, frío, sin alma. Buscó en línea durante semanas. O los precios eran absurdos o la calidad era dudosa.",
    paragraph3: "Un día, casi por casualidad, encontró nuestro collar de plata artesanal.",
    quote: "\"La noche de mi graduación, mi mamá me preguntó tres veces de dónde era el collar. Cuando le dije el precio, no me creyó. Pero lo que más me importó es que cuando me lo puse frente al espejo, por primera vez en meses, sentí que estaba lista.\"",
    moral: "Esa es la historia que se repite. No porque vendamos joyas. Sino porque entendemos que una pieza bien hecha, creada con intención y cuidado, tiene el poder de hacer que la persona que la lleva se sienta vista, valorada y completa.",
    summary: "Eso es lo que hace el arte cuando se convierte en accesorio. Eso es lo que hacemos nosotros."
  },

  solution: {
    badge: "LA SOLUCIÓN",
    title: "Presentamos: Collar Artesanal Personalizado — Joyería con Alma",
    intro: "No es un collar más. Es una pieza trabajada a mano, diseñada con atención obsesiva al detalle, elaborada con metales preciosos (plata fina de ley 925 u oro de 18K/24K) que mantienen su brillo, su color y su forma con el paso del tiempo.",
    process: "Cada collar nace de un proceso artesanal que combina técnicas tradicionales de joyería con diseños contemporáneos — el resultado es una pieza que se siente antigua en el mejor sentido: con peso, con carácter, con historia.",
    essence: "Es la joya que usas el primer día y sigues usando cinco años después. La que heredas. La que regalas con orgullo. La que se convierte en parte de tu firma personal.",
    destination: "Diseñada para la persona que sabe que los detalles importan. Para quien entiende que la elegancia no grita — susurra. Para quien quiere expresar algo genuino sobre sí misma sin depender de logos ni marcas de lujo inaccesibles.",
    personalNote: "Para ti."
  },

  benefitsIntro: "Lo que este collar hace por ti (y lo que ninguna joya genérica puede hacer)",
  featuresIntro: "¿Qué incluye exactamente tu Collar de Plata Artesanal?",
  howItWorksIntro: "Del primer vistazo a llevarlo puesto — así de simple",
  testimonialsIntro: "Lo que dicen quienes ya lo llevan puesto",
  bonusesIntro: "Lo que recibes además del collar — sin costo adicional",
  guaranteeTitle: "Garantía Sin Riesgo",
  guaranteeText: "Compra hoy. Si no es perfecto, lo resolvemos. Sin complicaciones.",
  guaranteeDetail1: "Cada collar está respaldado por una garantía contra defectos de fabricación. Eso significa que si tu pieza tiene cualquier problema relacionado con la calidad de la plata, el ensamblaje, la cadena o el acabado — lo reemplazamos o lo reparamos. Sin trámites kafkianos. Sin correos que nadie responde.",
  guaranteeDetail2: "Hemos pasado cinco años construyendo una reputación pieza por pieza, cliente por cliente. Esa reputación vale más que cualquier collar. Por eso no nos podemos permitir que un cliente quede insatisfecho con la calidad de lo que recibe.",
  guaranteeCallout: "La garantía es nuestra forma de decirte: confiamos tanto en lo que hacemos que te pedimos que confíes también.",
  guaranteeAction: "Tu única tarea es recibirlo, usarlo, y disfrutarlo. El resto corre por nuestra cuenta.",

  pricingIntro: "Una pieza artesanal que vale mucho más de lo que cuesta",
  pricingText1: "Comprar en una boutique de joyería artesanal en un centro comercial premium te costaría entre $80 y $200 por una pieza de calidad comparable. Y pagarías en buena parte el alquiler del local, el sueldo del vendedor y el margen de la marca.",
  pricingText2: "Aquí no hay local. No hay intermediarios. Hay una persona que trabaja con dedicación y que vende directamente a ti.",
  pricingRange: "Nuestros collares artesanales de plata y oro están disponibles desde $10, con opciones premium en baño de oro de 24K u oro sólido de 18K que pueden llegar a $150+ según la sofisticación del diseño.",
  pricingText3: "Lo que significa que por el precio de una salida a cenar, puedes tener una pieza de joyería artesanal que usarás por años. Por el precio de un capricho de una tarde, tienes algo permanente.",
  pricingNote: "Elige tu diseño y ve el precio exacto de tu pieza en la tienda. El valor que recibes siempre supera al número que pagas.",

  scarcityTitle: "Por qué esperar puede costarte más que actuar hoy",
  scarcityText1: "Las piezas artesanales no se producen en fábrica. Cada collar toma tiempo, atención y materiales de calidad. Eso significa que los inventarios son limitados — especialmente en los diseños más populares y en las fechas cercanas a temporadas especiales.",
  scarcityText2: "Actualmente, varios de nuestros diseños con mayor demanda tienen stock limitado. Cuando se agotan, el tiempo de reposición puede ser de semanas.",
  scarcityText3: "Además, los bonos actuales — incluyendo el envío gratuito y el descuento para segunda compra — son parte de una promoción por tiempo determinado. No es una táctica de presión. Es simplemente la realidad de que las promociones tienen fecha de vencimiento.",
  scarcityText4: "Si tienes una fecha en mente — un cumpleaños, un aniversario, una graduación, una Navidad — el tiempo de producción y envío importa. Pedir hoy significa recibir a tiempo. Pedir en el último momento significa arriesgarte.",
  scarcityCallout: "El collar que estás mirando ahora mismo puede no estar disponible mañana. El precio de hoy no está garantizado para la semana siguiente.",
  scarcityAction: "Actúa cuando el impulso y la claridad coincidan. Ese momento es ahora.",

  aboutTitle: "Quién hay detrás de cada pieza",
  aboutGreeting: "Hola, soy Jender Llanos.",
  aboutParagraph1: "Llevo cinco años en el mundo de la joyería artesanal, y si hay algo que aprendí en ese tiempo es que las personas no buscan solo un accesorio — buscan algo que las represente. Algo que cuando lo miren, sientan que fue hecho para ellas.",
  aboutParagraph2: "Empecé con un conocimiento básico, mucha curiosidad y una convicción firme: que la joyería de calidad no debería ser un privilegio de unos pocos. Que una persona joven que trabaja, que cuida su estilo, que quiere regalar algo con significado — merece acceso a piezas reales, bien hechas, honestas en su precio.",
  aboutParagraph3: "Cinco años después, cada pieza que sale de mis manos pasa por el mismo filtro: ¿la usaría yo? ¿La regalaría a alguien que quiero? Si la respuesta es sí, sale. Si no, vuelve al proceso.",
  aboutParagraph4: "No soy una marca grande. No tengo una fábrica. Tengo experiencia, tengo criterio, y tengo el compromiso personal de que cada cliente que confía en mí reciba algo que vale su dinero y su confianza.",
  aboutParagraph5: "Eso no cambia. Eso no escala de forma que lo diluya. Es el centro de lo que hago.",
  aboutConclusion: "Cuando compras un collar de Jender Llanos, no estás comprando a una empresa. Estás comprando a una persona que pone su nombre en cada pieza.",

  finalCtaTitle: "Este es tu momento. No el de la semana que viene.",
  finalCtaText1: "Ya sabes lo que este collar puede hacer. Ya lo viste en los testimonios. Ya entiendes la diferencia entre una joya genérica y una pieza artesanal de verdad.",
  finalCtaQuestion: "¿Vas a seguir usando accesorios que no te representan, o vas a dar ese paso y elegir algo que sí lo haga?",
  finalCtaText2: "El collar que está esperándote ahora mismo tiene tu nombre. Fue pensado para una persona que, como tú, entiende que los detalles importan. Que la calidad se nota. Que vale la pena invertir en algo que dure.",
  finalCtaButton: "QUIERO MI COLLAR ARTESANAL AHORA",
  finalCtaSub: "Haz clic, elige tu diseño, y en pocos días tendrás cerca del cuello algo que te va a acompañar por años.",
  finalCtaFooter: "Stock limitado. Bonos disponibles por tiempo definido. Garantía de calidad incluida. Atención personal garantizada.",
  finalCtaDecision: "No lo pienses más. Ya lo pensaste suficiente.",
  finalCtaContact: "¿Tienes preguntas antes de comprar? Escríbeme directamente — respondo personal y rápido.",
  finalCtaSignature: "Jender Llanos — Joyería Artesanal con Alma."
};

export const BENEFITS: Benefit[] = [
  {
    id: 1,
    title: "Te da una identidad visual inmediata",
    description: "El collar correcto es lo primero que la gente nota y lo último que olvida. Esta pieza dice más sobre ti en dos segundos que cualquier prenda que leyas encima."
  },
  {
    id: 2,
    title: "Dura años, no semanas",
    description: "Olvida los collares que se oscurecen al tercer baño o se parten a los dos meses. La plata artesanal de calidad, bien cuidada, te acompaña por años. Es una inversión de largo plazo en tu imagen."
  },
  {
    id: 3,
    title: "Funciona para cualquier ocasión",
    description: "Desde una reunión de trabajo hasta una cena romántica, desde un día casual con amigos hasta una boda. La versatilidad de una pieza bien diseñada significa que no necesitas diez collares distintos — solo el correcto."
  },
  {
    id: 4,
    title: "Hace que los regalos importen de verdad",
    description: "Si lo compras para alguien más, esto no es un regalo cualquiera. Es un gesto que dice: \"te conozco, te valoro, quise darte algo real.\" Esa diferencia se nota, y no se olvida."
  },
  {
    id: 5,
    title: "Refuerza tu confianza desde adentro hacia afuera",
    description: "Hay algo en llevar una pieza que te encanta — que sabes que es buena, que sabes que te queda perfecta — que cambia cómo caminas, cómo hablas, cómo te presentas. No es vanidad. Es presencia."
  },
  {
    id: 6,
    title: "Es una pieza con historia, no un producto de catálogo",
    description: "Cada collar artesanal tiene pequeñas particularidades que lo hacen único. No hay dos exactamente iguales. Llevas algo que nadie más tiene exactamente igual. Eso tiene un valor que no aparece en ninguna etiqueta de precio."
  },
  {
    id: 7,
    title: "Eleva cualquier outfit sin esfuerzo",
    description: "No necesitas saber de moda ni tener un armario de influencer. Un buen collar de plata transforma un outfit básico en algo que parece pensado y curado. Es el truco que las estilistas no siempre revelan."
  },
  {
    id: 8,
    title: "Es accesible sin sacrificar calidad",
    description: "Joyas artesanales de plata real a precios que no requieren un préstamo bancario. La elegancia no debería ser exclusiva de quienes pueden pagar precios de boutique en aeropuerto. Aquí no lo es."
  }
];

export const FEATURES: Feature[] = [
  {
    id: "collar",
    title: "El collar en sí",
    description: "Elaborado en plata de alta calidad, con diseño artesanal trabajado a mano. Disponible en diferentes estilos — desde diseños minimalistas y modernos hasta piezas con mayor detalle y volumen, según lo que mejor exprese tu personalidad.",
    iconName: "Sparkles"
  },
  {
    id: "cadena",
    title: "Cadena incluida",
    description: "Ajustable o de largo fijo según el diseño, construida para complementar la pieza central sin opacarla ni restarle protagonismo.",
    iconName: "Link"
  },
  {
    id: "acabado",
    title: "Acabado antioxidante",
    description: "Tratamiento que protege la plata del desgaste cotidiano, mantiene el brillo más tiempo y facilita el mantenimiento.",
    iconName: "ShieldAlert"
  },
  {
    id: "empaque",
    title: "Empaque para regalo",
    description: "Cada collar llega en un empaque cuidadosamente presentado, listo para entregar como regalo sin necesidad de envoltura adicional.",
    iconName: "Gift"
  },
  {
    id: "tarjeta",
    title: "Tarjeta de cuidado",
    description: "Instrucciones claras y simples para mantener tu collar en perfectas condiciones durante años.",
    iconName: "Heart"
  },
  {
    id: "garantia",
    title: "Garantía de calidad por escrito",
    description: "Documentación de la garantía contra defectos de fabricación incluida con cada pieza.",
    iconName: "FileCheck"
  }
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Elige tu pieza",
    description: "Explora los diseños disponibles y elige el que más habla de ti (o de quien recibirá el regalo). Hay opciones para cada estilo: minimalista, clásico, bohemio, elegante."
  },
  {
    step: 2,
    title: "Personaliza si lo deseas",
    description: "Algunos diseños permiten grabados, elección de colgante o ajustes en la longitud de cadena. Indícalo en tu pedido."
  },
  {
    step: 3,
    title: "Completa tu pedido con seguridad",
    description: "El proceso de compra es simple, seguro y rápido. Recibirás confirmación inmediata."
  },
  {
    step: 4,
    title: "Nosotros preparamos tu pieza",
    description: "Cada collar se revisa y empaca con cuidado antes de salir. No es producción en masa — cada pieza pasa por un control de calidad."
  },
  {
    step: 5,
    title: "Recíbelo en tu puerta",
    description: "Con opciones de envío estándar y express. El empaque protege la pieza durante el tránsito."
  },
  {
    step: 6,
    title: "Úsalo el mismo día",
    description: "No hay preparación, no hay montaje, no hay complicaciones. Sale de la caja listo para brillar."
  }
];

export const TRANSFORMATION = {
  before: {
    title: "Antes",
    points: [
      "Te vistes con cuidado pero algo siempre falta.",
      "Tienes joyas pero ninguna que realmente te represente.",
      "Cuando buscas regalar algo especial, no encuentras nada que esté a la altura.",
      "Tus accesorios duran poco, se deterioran rápido y se vuelven verdes o negros.",
      "Evitas usar joyería porque nunca encontraste nada que realmente te encantara."
    ]
  },
  after: {
    title: "Después",
    points: [
      "Tienes una pieza que es tuya de verdad, que expresa quién eres.",
      "Un collar duradero de plata fina que mantiene su brillo inalterable.",
      "Cuando entras a una habitación, el collar amplifica tu personalidad sin competir.",
      "Regalas con orgullo total sabiendo que entregas algo con alma y gran valor real.",
      "Llevas cerca del cuello algo que tiene historia, cuidado y significado."
    ]
  }
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "mariana",
    name: "Mariana G.",
    age: 30,
    location: "Bogotá",
    rating: 5,
    text: "Compré el collar para mi cumpleaños número 30. Quería algo que marcara el momento, algo que pudiera mirar en diez años y recordar exactamente cómo me sentí ese día. Lo encontré. La calidad es impresionante para el precio, y el empaque llegó tan bonito que casi no quería abrirlo. Ya me lo han preguntado cuatro veces esta semana."
  },
  {
    id: "diego",
    name: "Diego R.",
    age: 26,
    location: "Ciudad de México",
    rating: 5,
    text: "Mi novia llevaba meses hablando de que quería una joya de plata real, no esas imitaciones que se ponen verdes. Se lo regalé para nuestro aniversario y cuando lo abrió se le aguaron los ojos. Para mí eso lo dice todo. El envío fue rápido, el producto llegó exactamente como lo mostraban, y el servicio cuando pregunté antes de comprar fue excelente."
  },
  {
    id: "sofia",
    name: "Sofía M.",
    age: 34,
    location: "Buenos Aires",
    rating: 5,
    text: "Soy joyera aficionada y sé distinguir la calidad cuando la veo. Este collar tiene un acabado limpio, una soldadura bien hecha y una plata que se siente densa, no hueca. Para el rango de precio es extraordinario. Ya hice mi segundo pedido y planeo seguir comprando. Finalmente encontré un proveedor en el que confío."
  },
  {
    id: "carmen",
    name: "Carmen L.",
    age: 52,
    location: "Madrid",
    rating: 5,
    text: "Tengo 52 años y llevo toda la vida comprando joyas baratas que duran poco. Una amiga me recomendó este collar y la verdad es que me costó convencerme — siempre me habían decepcionado. Pero lo compré y en seis meses no ha perdido nada de su brillo. Nada. Lo uso casi a diario. Ojalá lo hubiera encontrado antes."
  },
  {
    id: "andres",
    name: "Andrés P.",
    age: 29,
    location: "Lima",
    rating: 5,
    text: "Lo pedí para regalarle a mi mamá en el Día de la Madre y ella todavía lo menciona cada vez que lo usa. Me dijo que es el regalo más bonito que le he dado en años. Y eso que mis hermanos le regalaron cosas mucho más caras ese día. La presentación, el detalle del empaque, la calidad del collar — todo sumó. Volveré para Navidad seguro."
  }
];

export const BONUSES: Bonus[] = [
  {
    id: 1,
    title: "Bono 1 — Empaque Premium para Regalo",
    value: 8,
    description: "Tu collar llega en una caja elegante, con protección interior y presentación lista para entregar. No necesitas envoltura, no necesitas moño. Sale de nuestra mano y llega lista para hacer sonreír a quien la recibe.",
    isFree: true
  },
  {
    id: 2,
    title: "Bono 2 — Envío Gratuito en pedidos seleccionados",
    value: 15,
    description: "Eliminamos el costo de envío en pedidos que califiquen, porque creemos que el precio que ves es el precio que pagas. Sin sorpresas al final del carrito.",
    isFree: true
  },
  {
    id: 3,
    title: "Bono 3 — Guía de Cuidado para Joyas de Plata",
    value: 5,
    description: "Una guía práctica con todo lo que necesitas saber para mantener tu collar brillante durante años: cómo limpiarla, cómo guardarla, qué evitar. Simple, directa, y útil de verdad.",
    isFree: true
  },
  {
    id: 4,
    title: "Bono 4 — Descuento exclusivo en tu próxima compra",
    value: 10,
    description: "Clientes que compran por primera vez reciben un código de descuento de $10 para su siguiente pedido. Porque nuestra apuesta es que cuando veas la calidad de primera mano, quieras volver.",
    isFree: true
  },
  {
    id: 5,
    title: "Bono 5 — Atención personalizada post-compra",
    value: 25,
    description: "Jender atiende personalmente a cada cliente. Si tienes una pregunta, un ajuste que necesitas, o cualquier detalle después de recibir tu pieza, hay una persona real al otro lado — no un bot. Una persona que conoce cada collar y quiere que tu experiencia sea perfecta.",
    isFree: true
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "¿La plata es real o es solo un baño de plata?",
    answer: "Nuestros collares están fabricados con plata de alta calidad, no con metales base recubiertos de plata que se desgastan rápidamente. Esa es precisamente la diferencia que distingue una pieza que dura años de una que cambia de color en semanas. En la descripción de cada producto encontrarás la especificación exacta del material."
  },
  {
    question: "¿Puedo pedir un diseño personalizado o una pieza especial para un regalo?",
    answer: "Sí. Muchos de nuestros pedidos son para ocasiones específicas y podemos orientarte hacia el diseño más adecuado. Además, algunos estilos admiten personalización en grabados o en la longitud de la cadena. Escríbenos antes de comprar y te guiamos."
  },
  {
    question: "¿Cuánto tiempo tarda en llegar?",
    answer: "El tiempo de entrega varía según tu ubicación y la opción de envío que elijas. Los pedidos se preparan y despachan en un plazo corto tras la confirmación de pago. Recibirás un número de seguimiento para monitorear tu paquete con envíos estándar y express."
  },
  {
    question: "¿Cómo cuido el collar para que dure mucho tiempo?",
    answer: "La guía de cuidado que incluimos con cada pedido cubre todo lo que necesitas. En resumen: guárdalo separado de otras joyas para evitar rayones, evita el contacto con productos químicos como perfumes o cloro, y límpiatelo ocasionalmente con un paño suave. Es más sencillo de lo que parece."
  },
  {
    question: "¿Qué pasa si el collar llega dañado o hay un problema de calidad?",
    answer: "Contáctanos de inmediato y resolvemos. Punto. Hacemos seguimiento a cada pedido y nuestro compromiso con la calidad es lo que ha construido nuestra reputación durante cinco años. Un problema de calidad no es una discusión — es una solución que buscamos sin demora."
  },
  {
    question: "¿Es seguro comprar en línea? ¿Cómo sé que realmente voy a recibir lo que vi?",
    answer: "Las fotos de nuestros productos muestran las piezas reales que enviamos — sin filtros extremos ni ediciones que distorsionen el producto. Hemos atendido a miles de clientes con una tasa de satisfacción que habla sola. Además, nuestros testimonios son reales y verificables."
  },
  {
    question: "¿Pueden enviarlo como regalo directamente a otra persona?",
    answer: "Sí. Puedes indicar una dirección de entrega diferente a la tuya al momento de hacer el pedido. El empaque premium llega listo para regalo, sin ningún comprobante de precio dentro del paquete si así lo prefieres. Solo indícalo en las notas del pedido."
  }
];

export const MATERIAL_OPTIONS: MaterialOption[] = [
  { id: "silver", name: "Plata de Ley 925", price: 0, description: "Plata sólida 925 con acabado pulido espejo y tratamiento antioxidante." },
  { id: "gold_plated", name: "Baño de Oro de 24K sobre Plata", price: 15, description: "Capa gruesa de oro de 24K electrodepositada sobre base sólida de Plata 925." },
  { id: "rose_gold", name: "Baño de Oro Rosa de 18K sobre Plata", price: 15, description: "Tono cálido y sofisticado de oro rosa de 18K sobre base sólida de Plata 925." },
  { id: "gold_solid", name: "Oro Amarillo Sólido de 18K", price: 125, description: "Elaborado enteramente en oro sólido de 18 quilates, con certificado de taller." }
];

// Configurator options that add up perfectly and allow modular combination
export const DESIGN_STYLES: DesignStyle[] = [
  { id: "minimalist", name: "Estilo Minimalista", price: 10, description: "Un dije sutil, geométrico, refinado y moderno. Ideal para uso diario." },
  { id: "classic", name: "Estilo Clásico", price: 25, description: "Diseño elegante con curvas suaves y simetría. Destaca con discreción." },
  { id: "bohemian", name: "Estilo Bohemio", price: 35, description: "Detalles inspirados en la naturaleza, con texturas rústicas hechas a mano." },
  { id: "elegante", name: "Estilo Elegante Premium", price: 49, description: "Mayor volumen, relieves profundos pulidos a espejo y máxima distinción." }
];

export const PENDANT_TYPES: PendantType[] = [
  { id: "none", name: "Sin Colgante Adicional (Solo cadena y estilo base)", price: 0, description: "Elegancia minimalista pura." },
  { id: "hope", name: "Corazón de la Esperanza", price: 15, description: "Dije esculpido con relieves que simbolizan amor incondicional y fe." },
  { id: "infinite", name: "Vínculo Infinito", price: 15, description: "Un lazo de eternidad fluido con entrelazado de hilos de plata fina." },
  { id: "lunar", name: "Sol y Luna", price: 15, description: "Doble cara grabada con constelaciones y acabados satinados." },
  { id: "tree", name: "Árbol de la Vida", price: 15, description: "Micro-tallado con las ramas extendidas, símbolo de crecimiento y raíces." }
];

export const CHAIN_LENGTHS: ChainLength[] = [
  { id: "40", name: "40 cm (Ajuste Gargantilla)", price: 0 },
  { id: "45", name: "45 cm (Estándar Ideal)", price: 5 },
  { id: "50", name: "50 cm (Largo Elegante)", price: 8 }
];

export const PACKAGING_OPTIONS: PackagingOption[] = [
  { id: "eco", name: "Sobre Kraft Ecológico Artesanal", price: 0, description: "Papel reciclado grueso sellado con lacre de cera." },
  { id: "premium", name: "Empaque Premium Jender Llanos (Recomendado)", price: 8, description: "Estuche rígido gris carbón con logo plata, cojín de terciopelo y cinta de raso. Incluido gratis en Bono 1!" }
];
