function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <div>
                <p> {currentYear} Or Hasson &copy;</p>
            </div>
        </footer>
    )
}


export default Footer;