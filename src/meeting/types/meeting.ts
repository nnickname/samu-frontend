export interface ISpeaker {
    id: number;
    name: string;
    lastName: string;
    email: string;
  }
  
export interface IMessage {
    speakerId: number;
    text: string;
  }
  
export interface IChatMessage {
    question: string;
    answer: string;
    timestamp: Date;
  }
  
export interface IMeeting {
    _id: string;
    transcription: {
      speakers: ISpeaker[];
      messages: IMessage[];
    };
    chatHistory: IChatMessage[];
  }