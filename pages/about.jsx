

export class About extends React.Component {



    render() {
        return (
            <section className="about">
                <button onClick={() => this.props.history.push('/book')}>X</button>
                <img className="missbook-about" src="assets/img/miss.png" />
                <h3 onClick={() => this.props.history.push('/book')} className="title-about">Miss Book</h3>
                <p >Dear readers, </p>
                <p> We offer tremendous gathering of books in various classification of Fiction, Non-fiction, Biographies, History, Religions, Self – Help, Children. We likewise move in immense accumulation of Investments and Management, Computers, Engineering, Medical, College and School content references books proposed by various foundations as schedule the nation over. Other than to this, we likewise offer an expansive gathering of E-Books at reasonable valuing.</p>
                <p>We endeavor to broaden the consumer loyalty by providing food simple easy to use web index, brisk and easy to understand installment alternatives and snappier conveyance frameworks. Upside to the majority of this, we are arranged to give energizing offers and charming limits on our books.</p>
                <p>Too, we modestly welcome every one of the merchants around the nation to band together with us. We will without a doubt give you the stage to many shimmering areas and develop the “Organization Name” family.We might want to thank you for shopping with us. You can keep in touch with us for any new musings at “email-id” helping us to ad lib for the peruser fulfillment.</p>

            </section>
        )
    }
}
