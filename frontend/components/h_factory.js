

const HFactory = ({message, transaction}) => {
    return (
        <form onSubmit={transaction} className="factoryForm">
            <div className="factoryInput__container">
                <input
                    className="factoryInput__input"
                    ref={message}
                    type="text"
                    placeholder="방명록으로 작성할 메세지를 입력하세요."
                    maxLength={120}
                />
                <input type="submit" value="&rarr;" className="factoryInput__arrow" />
		    </div>
        </form>
    )
}

export default HFactory;