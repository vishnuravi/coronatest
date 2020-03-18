import { Controller, Post, Body, Session, Req, Get, UseGuards } from '@nestjs/common';
import { CreateSubmissionDto } from './dto/createSubmission.dto';
import { SubmissionsService } from './submissions.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('submissions')
export class SubmissionsController {
    constructor(private readonly submissionsService: SubmissionsService) {}

    @Post()
    async createSubmission(@Body() createSubmissionDto: CreateSubmissionDto, @Session() session, @Req() req): Promise<any> {
        const sessionID = req.sessionID;
        const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        return await this.submissionsService.createSubmission(createSubmissionDto, sessionID, ipAddress);
    }

    @UseGuards(AuthGuard('headerapikey'))
    @Get()
    async getSubmissions(@Req() req): Promise<any> {
        return await this.submissionsService.getSubmissions();
    }

}   
