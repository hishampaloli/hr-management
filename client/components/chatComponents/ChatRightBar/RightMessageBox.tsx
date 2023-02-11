import React from "react";
import { MessageData } from "../../../models/socket";
import styles from "../../../styles/chat.module.scss";

const RightMessageBoxDiv = ({ messageData }: { messageData: MessageData }) => {
  return (
    <div className={styles.rightMessage}>
      <div>
        <span>
          <p>{messageData?.messagedAt.toString().slice(0, 10)}</p>
          <p>
            <strong>{messageData?.messageBy?.name}</strong>{" "}
          </p>
        </span>
        <p>{messageData?.content}</p>
      </div>
      <img src={messageData.messageBy.image} alt="" />
    </div>
  );
};

export default RightMessageBoxDiv;
