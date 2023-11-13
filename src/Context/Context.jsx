import { createContext } from "react";

const AllContext = createContext({
  deleteModal: false,
  islogin: false,
  editeModal: false,
  infoModal: false,
  editUserModal: false,
  showCommentrModal: false,
  answerCommentModal: false,
  AnswerTicket: false,
  ShowTicket: false,
  orderModa: false,
  ShowProfile: false,
  deleteUser: false,
  AllUser: [],
  AllProduct: {},
  admin: [],
  Delete: () => {},
  Deleteuser: () => {},
  login: () => {},
  Edit: () => {},
  Info: () => {},
  EditUser: () => {},
  showComment: () => {},
  answerComment: () => {},
  showTicket: () => {},
  answerTicket: () => {},
  showOrder: () => {},
  showProfileAdmin: () => {},
  RenderRemoveProduct: () => {},
  RenderUser: () => {},
  RenderAdmin: () => {},
});

export default AllContext;
