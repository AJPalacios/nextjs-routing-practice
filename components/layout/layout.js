import { Fragment } from "react";
import MainHheader from "./main-header";

function Layout(props) {
  return (
    <Fragment>
        <MainHheader />
        <main>
            {props.children}
        </main>
    </Fragment>
  )
}

export default Layout;
