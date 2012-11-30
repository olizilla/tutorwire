package models

import org.specs2.mutable._

import play.api.test._
import play.api.test.Helpers._

class PuidSpec extends Specification {

	val puid = Puid()

	"A Puid like: " + puid should {

		"contain at least 6 chars" in {
			puid.length() must beGreaterThanOrEqualTo(6)
		}

		"contain only valid characters" in {
			puid.forall(char => {
				Puid.characters must contain(char)
			})
		}
	}
}