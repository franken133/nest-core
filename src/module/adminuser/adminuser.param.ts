import { IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class AdminuserParam {
  @ApiModelProperty({ description: '用户名' })
  @IsNotEmpty({ message: '用户名不能为空!' })
  userName: string;
  @ApiModelProperty({ description: '密码' })
  @IsNotEmpty({ message: '密码不能为空!' })
  password: string;
  @IsBoolean({ message: '必须为boolean值' })
  @IsOptional()
  rememberMe: boolean = false;
}
