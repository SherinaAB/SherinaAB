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
        </motion.div>
    );
}