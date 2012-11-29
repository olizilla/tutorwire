package models

import anorm._
import anorm.SqlParser._
import play.api.db._

case class Tutor(id: String, email: String, name: String, location: String)

object Tutor{

	def apply(email: String, name: String, location: String) = {
		new Tutor(Puid().toString(), email, name, location)
	}

}