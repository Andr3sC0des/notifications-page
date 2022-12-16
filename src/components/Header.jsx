import React from "react"

class Notifications extends React.Component {
    render() {
        return (
            <>
                <header className="flex justify-between items-center p-4">
                    <div className="flex gap-2">
                        <h1 className="font-bold text-xl">Notifications</h1>
                        <span className="bg-custom-blue rounded-md inline-block w-6 text-white text-center">{this.props.allRead}</span>
                    </div>
                    <span id="MarkAllAsRead" className="text-custom-grayish-blue cursor-pointer hover:text-custom-blue">Mark all as read</span>
                </header>
            </>
        );
    }
}

export default Notifications