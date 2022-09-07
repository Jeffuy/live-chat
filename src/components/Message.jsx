import React from "react";

const Message = () => {
	return (
		<div className="message owner">
			<div className="messageInfo">
				<img
					src="https://images.pexels.com/photos/13195312/pexels-photo-13195312.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
					alt="avatar"
				/>
				<span>Just Now</span>
			</div>
			<div className="messageContent">
				<p>Hello</p>
				<img
					src="https://images.pexels.com/photos/13195312/pexels-photo-13195312.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Message;
