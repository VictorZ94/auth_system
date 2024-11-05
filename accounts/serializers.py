from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model

User = get_user_model()


class UserCreateSerializer(UserCreateSerializer):
    """
    Serializer for creating a new user instance.

    This serializer extends the base UserCreateSerializer to include
    additional fields specific to the application's user model. It
    specifies the model to be used and the fields that should be
    included in the serialized output.
    """
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'name', 'password')
