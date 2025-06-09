import { motion } from "framer-motion";
import React from "react";
import { AlertTriangleIcon } from "../assets/svgs";

type AnmationAlertProps = {
  warning?: boolean;
  alert?: boolean;
};

const AnmationAlert: React.FC<AnmationAlertProps> = ({ warning, alert }) => {
  if (warning) {
    return <AlertTriangleIcon color="#eab308" />;
  }

  if (alert) {
    return (
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
          ease: "easeInOut",
        }}
      >
        <AlertTriangleIcon color="#ef4444" />
      </motion.div>
    );
  }

  return null;
};

export default AnmationAlert;
