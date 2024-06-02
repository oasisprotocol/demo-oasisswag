import classes from "./index.module.css"
import footerLogo from './images/Network Logo Blue.svg'

export const Footer = () => {
  return (
    <>
      <div className={classes.footerDivider}/>
      <div className={classes.footer}>
        <div>
          <img className={classes.footerLogo}
               src={footerLogo}
               alt="Footer logo"/>
        </div>
        <div className={classes.dividerVertical}/>
        <a href="https://oasisprotocol.org/terms-of-use" target="_blank" rel="noopener noreferrer"
           className={classes.footerLink}>Terms of Use</a>
        <div className={classes.dividerVertical}/>
        <a href="https://oasisprotocol.org/privacy-policy" target="_blank" rel="noopener noreferrer"
           className={classes.footerLink}>Privacy Policy</a>
        <div className={classes.dividerVertical}/>
        <div className={classes.footerText}>Copyright © 2023 Oasis Protocol Foundation. All rights reserved.</div>
      </div>
    </>
  );
}
