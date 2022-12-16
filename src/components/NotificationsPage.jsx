import React from "react"
import "../css/attribution.css"

import Notifications from "./Header"
import Post from './Post'

import angelaGray from "../images/avatar-angela-gray.webp"
import annaKim from "../images/avatar-anna-kim.webp"
import jacobThompson from "../images/avatar-jacob-thompson.webp"
import kimberlySmith from "../images/avatar-kimberly-smith.webp"
import markWebber from "../images/avatar-mark-webber.webp"
import nathanPeter from "../images/avatar-nathan-peterson.webp"
import rizkyHas from "../images/avatar-rizky-hasanuddin.webp"
import Attribution from "./Attributtion"

class NotificationsPage extends React.Component {
    constructor() {
        super()
        this.state = {
            allRead: 0
        }
    }

    componentDidMount() {
        const posts = document.querySelectorAll("#post")

        posts.forEach((post) => {
            post.addEventListener("click", () => {
                if (post.classList.contains("bg-custom-light-grayish-blue-1")) {

                    post.classList.remove("bg-custom-light-grayish-blue-1")
                    post.querySelector("#unread").style.display = "none"

                    this.setState((prevState) => ({
                        allRead: prevState.allRead - 1
                    }))
                }

            }
            )

            if (post.classList.contains("bg-custom-light-grayish-blue-1")) {
                this.setState((prevState) => ({
                    allRead: prevState.allRead + 1
                }))
            } else {
                post.querySelector("#unread").style.display = "none"
            }
        })

        const allRead = () => {
            posts.forEach(post => {
                post.classList.remove("bg-custom-light-grayish-blue-1")
                post.querySelector("#unread").style.display = "none"
                this.setState({ allRead: 0 })
            })
        }

        const setAllRead = document.querySelector("#MarkAllAsRead")
        setAllRead.addEventListener("click", () => {
            allRead()
        })
    }

    render() {
        return (
            <>
                <Attribution />
                <section className='shadow-gray-400 flex justify-center items-center'>
                    <article className='bg-white'>

                        <Notifications allRead={this.state.allRead} />

                        <section className='px-4 flex flex-col gap-4'>

                            <Post key={1}
                                read="bg-custom-light-grayish-blue-1"
                                show="hidden"
                                responsehidden="hidden"
                                response=""
                                img={markWebber}
                                usuario={[
                                    <a key={1} className="font-bold cursor-pointer hover:text-custom-blue">Mark Webber</a>
                                ]}
                                msg={["reacted to your recent post ",
                                    <a key={1} className="cursor-pointer text-custom-blue font-bold">My first tournament today!</a>
                                ]}
                                time="1m ago" />

                            <Post
                                key={2}
                                read="bg-custom-light-grayish-blue-1"
                                show="hidden"
                                responsehidden="hidden"
                                response=""
                                img={angelaGray}
                                usuario={[
                                    <a key={1} className="font-bold cursor-pointer hover:text-custom-blue">Angela Gray</a>
                                ]}
                                msg="followed you"
                                time="5m ago" />

                            <Post
                                key={3}
                                read="bg-custom-light-grayish-blue-1"
                                show="hidden"
                                responsehidden="hidden"
                                response=""
                                img={jacobThompson}
                                usuario={[
                                    <a key={1} className="font-bold cursor-pointer hover:text-custom-blue">Jacob Thompson</a>
                                ]}
                                time="1 day ago"
                                msg={["has joined your group ",
                                    <a key={1} className="cursor-pointer text-custom-blue font-bold">Chess Club</a>
                                ]} />

                            <Post
                                key={4}
                                read="bg-white"
                                show="hidden"
                                response="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
                                img={rizkyHas}
                                usuario={[
                                    <a key={1} className="font-bold cursor-pointer hover:text-custom-blue">Rizky Hasanuddin</a>
                                ]}
                                msg="sent you a private message"
                                time="5 days ago" />

                            <Post
                                key={5}
                                read="bg-white"
                                show="block"
                                responsehidden="hidden"
                                img={kimberlySmith}
                                usuario={[
                                    <a key={1} className="font-bold cursor-pointer hover:text-custom-blue">Kimberly Smith</a>
                                ]}
                                msg="commented on your picture"
                                time="1 week ago" />

                            <Post
                                key={6}
                                read="bg-white"
                                show="hidden"
                                responsehidden="hidden"
                                response=""
                                img={nathanPeter}
                                usuario={[
                                    <a key={1} className="font-bold cursor-pointer hover:text-custom-blue">Nathan Peterson</a>
                                ]}
                                msg={["reacted to your recent post ",
                                    <a key={1} className="font-bold text-custom-blue cursor-pointer">5 end-game strategies to increase your win rate</a>
                                ]}
                                time="2 weeks ago" />

                            <Post
                                key={7}
                                read="bg-white"
                                show="hidden"
                                responsehidden="hidden"
                                response=""
                                img={annaKim}
                                usuario={[
                                    <a key={1} className="font-bold cursor-pointer hover:text-custom-blue">Anna Kim</a>
                                ]}
                                msg={["left the group ",
                                    <a key={1} className="cursor-pointer text-custom-blue font-bold">Chess Club</a>
                                ]}
                                time="2 weeks ago" />

                        </section>
                    </article>
                </section>
            </>
        );
    }
}

export default NotificationsPage