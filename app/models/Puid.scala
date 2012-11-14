package models

import util.Random

object Puid {

	// Used for validation, do not edit
	val minLength = 6;

	val length = 6;

	val characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-"

	def apply(): String = {
		val sequence = Seq.fill(length)(randomCharacter)
		sequence.mkString
	}

	def randomCharacter = {
		val randomIndex = Random.nextInt(characters.length())
		characters.charAt(randomIndex)
	}

}