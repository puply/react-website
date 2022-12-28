import React from 'react'
import logo from '../../assets/logo.png'
import { Inbox, InboxInOutline, LinkOutline, LocationMarkerOutline, Login, LoginOutline, Phone, Users } from "heroicons-react";
import css from './Footer.module.css'



const Footer = () => {
    return (

        <div className={css.cFooterWrapper}>
            <hr />
            <div className={css.cFooter}>
                <div className={css.clogo}>
                    <img src={logo} alt="" />
                    <span>amazon</span>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact Us</span>
                        <span className={css.pngLine}>
                            <LocationMarkerOutline className={css.icon} />
                            <span>111 north avenue Orlando, FL 32801</span>
                        </span>

                        <span className={css.pngLine}>
                            {" "}
                            <Phone className={css.icon} />
                            <span href="tel:555-698-123">555-698-123</span>
                        </span>

                        <span className={css.pngLine}>
                            <InboxInOutline className={css.icon} />
                            <span href="mailto:support@amazon.com">support@amazon.com</span>
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <LoginOutline className={css.icon} />
                            <span>Sign In</span>
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <Users className={css.icon} />
                            <p>About Us</p>
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <LinkOutline className={css.icon} />
                            <p>Safety Privacy & Terms</p>
                        </span>
                    </div>
                </div>
            </div>

            <div className={css.copyRight}>
                <span>Copyright ©2022 by Amazon, Inc.</span>
                <span>All rights reserved</span>
            </div>
        </div>

    )
}

export default Footer
