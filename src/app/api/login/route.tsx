import {NextRequest, NextResponse} from "next/server";
import EntityType from '../../../types/EntityType';
import {authenticateEntity} from '../../../helpers/authenticate-entity';
import jwt from 'jsonwebtoken'
import { headers } from 'next/headers'

export async function GET() {
    try {
      const headersInstance = headers()
      const authHeader = headersInstance.get('authorization')
      const token = authHeader.split(' ')[1]
      console.log(token)
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      if (!decoded) {
        return NextResponse.json(
          { message: 'Expired' },
          {
            status: 400,
          },
        )
      } else if (decoded.exp < Math.floor(Date.now() / 1000)) {
        return NextResponse.json(
          { message: 'Expired' },
          {
            status: 400,
          },
        )
      } else {
        // If the token is valid, return some protected data.
        return NextResponse.json(
          { data: 'Protected data' },
          {
            status: 200,
          },
        )
      }
    } catch (error) {
      console.error('Token verification failed', error)
      return NextResponse.json(
        { message: 'Unauthorized' },
        {
          status: 200,
        },
      )
    }
  }

  
// export async function POST(request: any) {
    const body = await request.json()
    const { username, password } = body
    const entity = await authenticateEntity(username, password) as EntityType
    // console.log(entity[0])
    const token = jwt.sign({ userId: entity.foreignid }, process.env.JWT_SECRET, {
      expiresIn: '5m',
    })
    
   
    return await NextResponse.json({ 
        token,
        entity: entity[0]
     })
// }