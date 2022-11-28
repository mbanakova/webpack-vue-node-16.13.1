import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

// https://fontawesome.com/v5/search?o=r&m=free&s=solid   <-выбираем иконку из бесплатных и solid

import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faPersonDress } from "@fortawesome/free-solid-svg-icons";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // добавляем название сюда

library.add(faPerson);
library.add(faPersonDress);
library.add(faPiggyBank);
library.add(faEnvelope);
library.add(faPhone); // и сюда

export default FontAwesomeIcon;

// <font-awesome icon="person-dress" />     <- пример тега с иконкой, без fa и через дефис
