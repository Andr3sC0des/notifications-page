import React from "react"
import chess from "../images/image-chess.webp"

class Post extends React.Component {
    render() {
        return (
            <>
                <article id="post" className={`${this.props.read} md:max-w-lg flex p-4 text-sm items-center gap-4`}>
                    <img className="h-14" src={this.props.img} alt="" />
                    <div>
                        <p className="text-custom-dark-grayish-blue">
                        <span className="font-bold text-black">{this.props.usuario} </span>
                            {this.props.msg}
                            <span id="unread" className="bg-custom-red rounded-full w-2 h-2 inline-block ml-2"></span>
                        </p>
                        
                        <span className="text-custom-grayish-blue">{this.props.time}</span>

                        <div className={`text-custom-dark-grayish-blue border border-gray-100 hover:bg-custom-light-grayish-blue-2 cursor-pointer rounded-sm mt-4 p-2 ${this.props.responsehidden}`}>{this.props.response}</div>
                        
                    </div>
                    <img className={`w-12 ${this.props.show} cursor-pointer ml-8`} src={chess} alt="" />
                </article>
            </>
        );
    }
}

export default Post