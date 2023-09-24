import resumeJson from './assets/resume.json'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import dayjs from 'dayjs'

export default function Resume() {
  return (
    <>
      <div>
        <Typography variant="h4" align="center">
          {resumeJson.basicInfo.name}
        </Typography>
        <Typography variant="body1" align="center">
          <Link href={resumeJson.basicInfo.linkedIn}>LinkedIn</Link>
        </Typography>
        <Typography variant="body1" align="center">
          <Link variant="body1" href={resumeJson.basicInfo.website}>
            mattmayo.com
          </Link>
        </Typography>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Dates</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resumeJson.jobs.map((job) => (
              <TableRow key={job.company}>
                <TableCell>{job.company}</TableCell>
                <TableCell>{job.role}</TableCell>
                <TableCell>
                  {dayjs(job.startDate).format('MMM YYYY')} -{' '}
                  {dayjs(job.endDate).format('MMM YYYY')}
                </TableCell>
                <TableCell>
                  {job.description.map((p) => (
                    <p>{p}</p>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
