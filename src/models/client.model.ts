import { Table, Column, DataType, Model } from 'sequelize-typescript';
import { CONSTANTS } from '../utils/constants/constants';
import { CLIENT_INTERFACE } from '../interfaces/client.interface';

const minLenghtPassword = 8;
const maxLenghtPassword = 99;
@Table({
	timestamps: true,
	tableName: 'client'
})
class Client extends Model<CLIENT_INTERFACE> {
  @Column({
  	type: DataType.STRING,
  	allowNull: false
  })
  	name!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false
	})
		username!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
		validate: {
			isEmail: true || { msg: 'Please enter a valid email address' }
		}
	})
		email!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
		validate: {
			len: [minLenghtPassword,maxLenghtPassword]
		}
	})
		password!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
		validate: {
			isIn: [CONSTANTS.ROLE],
		},
	})
		role!: string;

	@Column({
		type: DataType.DATE,
		allowNull: false
	})
		birthDate!: string;

	@Column({
		type: DataType.STRING,
		allowNull: true,
		validate: {
			isIn: [CONSTANTS.GENDER]
		}
	})
		gender!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
		phone!: string;
}

export default Client;
