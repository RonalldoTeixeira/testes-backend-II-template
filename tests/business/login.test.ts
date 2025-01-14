import {UserBusiness} from "../../src/business/UserBusiness"
import {HashManagerMock} from "../mocks/HashManagerMock"
import {IdGeneratorMock} from "../mocks/IdGeneratorMock"
import {TokenManagerMock} from "../mocks/TokenManagerMock"
import {UserDatabaseMock} from "../mocks/UserDatabaseMock"
import{LoginSchema} from "../../src/dtos/user/login.dto"
describe("Testando Login", ()=>{
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("deve gerar um tokem ao logar",async()=>{
        const input = LoginSchema.parse({
            email:"fulano@email.com",
            password:"fulano123"
        })
        const output = await userBusiness.login(input)
        expect(output).toEqual({
            message: "Login realizado com sucesso" ,
            token: "token-mock-fulano"
        })

    })
})