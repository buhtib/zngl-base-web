import Vue from "vue";
import {
    Pagination,
    Scrollbar,
    Dialog,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    InputNumber,
    Radio,
    RadioButton,
    Checkbox,
    CheckboxButton,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    Table,
    TableColumn,
    Tooltip,
    Form,
    FormItem,
    Tabs,
    Alert,
    Icon,
    Row,
    Col,
    Card,
    Steps,
    Step,
    Container,
    Link,
    Divider,
    Image,
    Loading,
    MessageBox,
    Message,
    Notification,
    Upload,
    Carousel,
    CarouselItem
} from "element-ui";

Vue.use(Pagination);
Vue.use(Scrollbar);
Vue.use(Dialog);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tooltip);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(Alert);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Container);
Vue.use(Link);
Vue.use(Divider);
Vue.use(Image);
Vue.use(Upload);
Vue.use(Carousel);
Vue.use(CarouselItem);

Vue.use(Loading.directive);
Vue.prototype.$ELEMENT = { size: 'small'};

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
