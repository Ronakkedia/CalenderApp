import {Controller, Get, Post, Put, Delete, Body, Param, UseInterceptors, UploadedFile} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    createEvent(
        @Body() createEventDto: any,
        @UploadedFile() file: Express.Multer.File,
    ) {
        const newEvent = { ...createEventDto, fileUrl: file?.path || null };
        return this.eventsService.create(newEvent);
    }
}

    @Get()
    findAll() {
        return this.eventsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.eventsService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() event) {
        return this.eventsService.update(+id, event);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.eventsService.remove(+id);
    }
}
