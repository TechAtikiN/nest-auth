import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './session.serializer';
import {JwtModule} from '@nestjs/jwt'
import { JwtStrategy } from './jwt.strategy';

@Module({

// used for authentication with express-session
//  providers: [AuthService, LocalStrategy, SessionSerializer],
//  imports: [UsersModule, PassportModule.register({ session: true })]

  
  imports: [UsersModule, PassportModule, JwtModule.register({
    // secret: '',
    signOptions: { expiresIn: '60s' },
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]

})
export class AuthModule {}
