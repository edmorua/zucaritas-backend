export interface CLIENT_INTERFACE {
  id?: number;
  name: string;
  username: string;
  email: string;
  /**
   * @pattern ^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$
   */
  password: string;
  role: 'ADMIN' | 'BABY' | 'DADDY' | 'MOMMY';
  birthdate: Date;
  /**
   * @pattern ^\d{6,}$
   */
  phone: string
  gender?: 'MALE' | 'FEMALE' | 'NO_BINARY';
}
