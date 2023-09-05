import resumeJson from './assets/resume.json'

export default function Resume() {
    return (
        <>
            <div>
                <h2>{resumeJson.basicInfo.name}</h2>
                <p>
                    <a href={resumeJson.basicInfo.linkedIn}>LinkedIn</a>
                    <br />
                    <a href={resumeJson.basicInfo.website}>mattmayo.com</a>
                </p>
            </div>
        </>
    )
}