import { motion } from 'framer-motion';
import './Menu.css';
import { NavLink } from 'react-router-dom';
import Sherina from '../../assets/Sherina.jpg';

function Menu() {
    const initial = { translateY: -50, opacity: 0 };
    const animation = { translateY: 0, opacity: 1 };
    return(
        <motion.div
            initial={{ display: 'none', opacity: 0}}
            animate={{ animation: 'block', opacity: 1 }}
            transition={{ delay: 4.6, duration: 1}}
            className="menu-container"
        > 
            <div className="menu_wrapper">
                <img className="menu_image" src={Sherina} alt="Sherina" />
                <div className="menu_nav">
                    <ul className="menu_router">
                        <motion.li
                            initial={initial}
                            animate={animation}
                            transition={{delay: 4.5, duration: 0.75}}
                        >
                            <NavLink to="about">About Me</NavLink>
                        </motion.li>
                        <motion.li
                            initial={initial}
                            animate={animate}
                            transition={{delay: 4.75, duration: 0.75}}
                        >
                            <NavLink to="work">My Works</NavLink>
                        </motion.li>
                        <motion.li
                            initial={initial}
                            animate={animate}
                            transition={{display: 5, duration: 0.75}}
                        >
                            <NavLink to="contact">Let's Talk!</NavLink>
                        </motion.li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

export default Menu;