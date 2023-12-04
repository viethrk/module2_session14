import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../../../redux/reducers/admin-login-reducer";

const AdminLoginPage = (props) => {
  const navigate = useNavigate();

  const dispath = useDispatch();

  // UseEffect
  const current_user = JSON.parse(localStorage.getItem("current_user"));
  useEffect(() => {
    if (current_user) navigate("/admin");
  }, []);
  // ===========props===========
  // const { titleLogin, titlePassword, submit, regis } = props;

  // ===========ref===========
  // khai bao ref
  const userRef = useRef("");
  const passwordRef = useRef("");

  //

  // xu ly event
  const onSubmit = async () => {
    // const listAdmin = await fetchAdminApi();
    // const userName = userRef.current.value;
    // const passWord = passwordRef.current.value;
    // const currentLogin = listAdmin.find((admin) => userName === admin.username);
    // if (currentLogin) {
    //   if (currentLogin.password === passWord) {
    //     const currentAdmin = CreateCurrentUser(userName, passWord);
    //     PushCurrentUserLocal(currentAdmin);
    //     navigate(SCREEN_URL.ADMIN_HOME);
    //   } else {
    //     alert("Nhap sai mat khau");
    //   }
    // } else {
    //   alert("Sai ten dang nhap bro");
    // }
    dispath(isLogin());
    navigate("/admin");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div bsPrefix="col-5" className="">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            <label>Tên đăng nhập ADMIN</label>
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={userRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            <label>Mật khẩu ADMIN</label>
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            ref={passwordRef}
          />
        </div>
        <div className="d-flex justify-content-between">
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <Link to={"/regis"}>Regis now</Link>
        </div>
        <button variant="primary" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AdminLoginPage;
