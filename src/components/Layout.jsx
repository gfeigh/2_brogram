export default function Layout(props) {

    const { children } = props

    const header = (
        <header>
            <h1 className="text-gradient">Hot Girl Workout</h1>
            <p><strong>The Simple Workout Program to turn you into a Hot Girl</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>Built by <a href="http://www.feighg.netlify.app" target="_blank">feighg</a></p>
        </footer>
    )

    return (
        <> 
            {header}
            {children}
            {footer}
        </>
    )
}