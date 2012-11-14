package models

import anorm._
import anorm.SqlParser._
import play.api.db._

case class Tutor(id: Long, email: String)
