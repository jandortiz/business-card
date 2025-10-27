import emailLogo from "../assets/correo.png"
import githubLogo from "../assets/github-mark.png"
import instagramLogo from "../assets/instagram-mark.png"

export default function Footer() {
	return (
		<div className="footer-container">
			<a href="mailto:jandortiz1890@gmail.com"><img src={emailLogo} alt="Email logo"></img></a>
			<a href="https://github.com/jandortiz" target="_blank"><img src={githubLogo} alt="GitHub logo"></img></a>
			<a href="https://www.instagram.com/jand_ortiz/" target="_blank"><img src={instagramLogo} alt="Instagram logo"></img></a>
		</div>
	)
}