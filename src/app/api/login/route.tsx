import {NextRequest, NextResponse} from "next/server";
import EntityType from '../../types/EntityType';
import {authenticateEntity} from '../../../helpers/authenticate-entity';
import jwt from 'jsonwebtoken'

export async function GET (request: NextRequest){
    const error = "This route is just for testing purpose!"
    const json = {
        error
    };
    
    return NextResponse.json(json);
}

  
export async function POST(request: NextRequest) {
    const body = await request.json()
    const { username, password } = body
    const entity : EntityType = await authenticateEntity(username, password)
    const token = jwt.sign({ entityId: entity.foreignid }, process.env.JWT_SECRET, {
      expiresIn: '1m',
    })
   
    return NextResponse.json({ token })
}